import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, interval, Subject, of } from 'rxjs';
import { switchMap, takeUntil, catchError, startWith } from 'rxjs/operators';

import { RestService } from '../../service/rest.service';

@Component({
  selector: 'app-tabLivePoll',
  templateUrl: 'tabLivePoll.page.html',
  styleUrls: ['tabLivePoll.page.scss']
})
export class TabLivePollPage implements OnInit, OnDestroy {

  curLivePollItem: object = {};
  isVoteOpen: boolean = false;
  votingSecondsLeft: number = 0;

  private killTrigger: Subject<void> = new Subject();
  private fetchCurLivePollItem$: Observable<any>;
  private fetchLivePollStatus$: Observable<any>;
  private intervalRefresh$: Observable<any>;

  constructor(private restService: RestService) {
    this.fetchCurLivePollItem$ = restService.getCurLivePollItem();
    this.fetchCurLivePollItem$.subscribe(
      data => {
        console.log('RestService getCurLivePollItem: ', data);
        this.curLivePollItem = data
      }
    );
    this.fetchLivePollStatus$ = restService.getLivePollStatus();
    this.intervalRefresh$ = interval(1000)
      .pipe(
        // Make the request on start
        startWith(() => this.fetchLivePollStatus$),
        // This kills the request if the user closes the component 
        takeUntil(this.killTrigger),
        // switchMap cancels the last request, if no response have been received since last tick
        switchMap(() => this.fetchLivePollStatus$),
        // catchError handles http throws 
        catchError(error => of('Error'))
      );
    this.intervalRefresh$.subscribe(
      data => {
        console.log('RestService getLivePollStatus: ', data);
        this.isVoteOpen = data.opening_seconds_left > 0;
        if (this.isVoteOpen) {
          this.votingSecondsLeft = +data.opening_seconds_left;
          console.log('RestService getLivePollStatus: ', this.isVoteOpen, this.votingSecondsLeft);
          this.fetchCurLivePollItem$;
        }
      }
    );
  }

  doVote(option) {
    console.log('voting', option);
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.killTrigger.next();
  }

}

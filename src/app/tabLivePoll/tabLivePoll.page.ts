import { Component } from '@angular/core';

@Component({
  selector: 'app-tabLivePoll',
  templateUrl: 'tabLivePoll.page.html',
  styleUrls: ['tabLivePoll.page.scss']
})
export class TabLivePollPage {

  constructor() {}

  doVote(option) {
    console.log("voting", option)
  }

}

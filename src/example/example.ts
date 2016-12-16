import { Component } from '@angular/core';
import { EmojitronPipe } from '../pipes/emojitron.pipe';

@Component({
  selector: 'examples',
  pipes: [EmojitronPipe],
  template:`
    <h1>Pipes Examples</h1>
    <ul>
      <li>emojitron: {{ emojiExample | emojitron }}</li>
    </ul>
  ` ,
})

export class Examples {
  emojiExample = 'This is *lk an emoji *sm example *cf. Example for *no match.';
}

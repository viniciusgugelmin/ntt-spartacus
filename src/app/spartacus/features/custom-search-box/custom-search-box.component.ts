import {ChangeDetectionStrategy, Component,} from '@angular/core';
import {SearchBoxComponent} from "@spartacus/storefront";

@Component({
  selector: 'cx-searchbox',
  templateUrl: './custom-search-box.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomSearchBoxComponent extends SearchBoxComponent {
}

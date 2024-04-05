import { Pipe } from '@angular/core';
import { HighlightPipe } from '@spartacus/storefront';

@Pipe({ name: 'cxHighlight' })
export class CustomHighlightPipe extends HighlightPipe {}

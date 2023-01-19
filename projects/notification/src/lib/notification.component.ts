import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  TemplateRef,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'ppr-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class PprNotificationComponent implements OnChanges, AfterViewInit {
  @Input() type: PprNotificationType = 'info';
  @Input() titleText = '';
  @Input() messageText = '';

  @Output() dismissEvent = new EventEmitter<void>();

  @ViewChild('infoIcon') infoIcon: TemplateRef<unknown>;
  @ViewChild('warningIcon') warningIcon: TemplateRef<unknown>;
  @ViewChild('dangerIcon') dangerIcon: TemplateRef<unknown>;

  mainClass = 'ppr-notification';
  icon: TemplateRef<unknown>;
  TYPE_TO_ICON_DICT: Record<PprNotificationType, TemplateRef<unknown>> | {} = {};

  private readonly TYPE_TO_CLASS_DICT: Record<PprNotificationType, string> = {
    info: 'ppr-notification--info',
    warning: 'ppr-notification--warning',
    danger: 'ppr-notification--danger',
  };

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.type) {
      this.mainClass = `ppr-notification ${this.TYPE_TO_CLASS_DICT[this.type]}`;
    }
  }

  ngAfterViewInit(): void {
    this.TYPE_TO_ICON_DICT = {
      info: this.infoIcon,
      warning: this.warningIcon,
      danger: this.dangerIcon,
    };
  }

  dismiss() {
    this.dismissEvent.emit();
  }
}

export type PprNotificationType = 'info' | 'warning' | 'danger';

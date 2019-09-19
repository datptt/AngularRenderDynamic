import { Component, OnInit, ViewChild, ViewContainerRef, AfterViewInit, ComponentRef, ComponentFactoryResolver, ChangeDetectorRef } from '@angular/core';
import { AlertContentComponent } from '../alert-content/alert-content.component';

@Component({
  selector: 'app-alert-container',
  templateUrl: './alert-container.component.html',
  styleUrls: ['./alert-container.component.css']
})
export class AlertContainerComponent implements OnInit, AfterViewInit {

  @ViewChild("container", {
    read: ViewContainerRef
  })
  container: ViewContainerRef;


  componentRef: ComponentRef<AlertContentComponent>;

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.renderComponent();
  }

  renderComponent() {
    const container = this.container;
    container.clear();
    const injector = this.container.injector;
    const cfr: ComponentFactoryResolver = injector.get(ComponentFactoryResolver);
    const componentFactory = cfr.resolveComponentFactory(AlertContentComponent);
    const componentRef = container.createComponent(componentFactory, 0, injector);
    componentRef.instance.data = "ahihi";
    this.cd.detectChanges();
    this.componentRef = componentRef;
  }
}

import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { FusionchartsComponent } from "./fusioncharts.component";

describe("FusionchartsComponent", () => {
  let component: FusionchartsComponent;
  let fixture: ComponentFixture<FusionchartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FusionchartsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FusionchartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

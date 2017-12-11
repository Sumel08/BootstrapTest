import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { CompanyComponent } from './company/company.component';
import { BrandComponent } from './brand/brand.component';
import { CompaniesComponent } from './company/companies/companies.component';
import { ProductComponent } from './analytics/product/product.component';
import { CampaignComponent } from './analytics/campaign/campaign.component';
import { ABrandComponent } from './analytics/a-brand/a-brand.component';
import { CUserComponent } from './company/c-user/c-user.component';
import { CCommissionComponent } from './company/c-commission/c-commission.component';
import { BCampaignComponent } from './brand/b-campaign/b-campaign.component';
import { BBrandComponent } from './brand/b-brand/b-brand.component';
import { BProductLineComponent } from './brand/b-product-line/b-product-line.component';
import { BProductComponent } from './brand/b-product/b-product.component';
import { BClusterComponent } from './brand/b-cluster/b-cluster.component';
import { BUserComponent } from './brand/b-user/b-user.component';
import { DistributionComponent } from './distribution/distribution.component';
import { ConsumersComponent } from './consumers/consumers.component';
import { TicketsComponent } from './tickets/tickets.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { SuggestionsComponent } from './suggestions/suggestions.component';
import { BillingComponent } from './billing/billing.component';
import { DGroupRetailerComponent } from './distribution/d-group-retailer/d-group-retailer.component';
import { DRetailerComponent } from './distribution/d-retailer/d-retailer.component';
import { DStoreComponent } from './distribution/d-store/d-store.component';
import { CConsumerComponent } from './consumers/c-consumer/c-consumer.component';
import { CPaymentComponent } from './consumers/c-payment/c-payment.component';
import { TicketComponent } from './tickets/ticket/ticket.component';
import { ReviewComponent } from './tickets/review/review.component';
import { CCompanyRoleComponent } from './configuration/c-company-role/c-company-role.component';
import { CBrandRoleComponent } from './configuration/c-brand-role/c-brand-role.component';
import { CCategoryComponent } from './configuration/c-category/c-category.component';
import { SPendingComponent } from './suggestions/s-pending/s-pending.component';
import { SArchivedComponent } from './suggestions/s-archived/s-archived.component';
import { BBillingComponent } from './billing/b-billing/b-billing.component';

const appRoutes: Routes = [
  {
    path: 'analytics',
    component: AnalyticsComponent,
    children: [
      {
        path: 'brand',
        component: ABrandComponent
      }, {
        path: 'product',
        component: ProductComponent
      }, {
        path: 'campaign',
        component: CampaignComponent
      }, {
        path: '',
        redirectTo: 'brand',
        pathMatch: 'full'
      }
    ]
  }, {
    path: 'company',
    component: CompanyComponent,
    children: [
      {
        path: 'company',
        component: CompaniesComponent
      }, {
        path: 'user',
        component: CUserComponent
      }, {
        path: 'commission',
        component: CCommissionComponent
      }, {
        path: '',
        redirectTo: 'company',
        pathMatch: 'full'
      }
    ]
  }, {
    path: 'brand',
    component: BrandComponent,
    children: [
      {
        path: 'campaign',
        component: BCampaignComponent
      }, {
        path: 'brand',
        component: BBrandComponent
      }, {
        path: 'productLine',
        component: BProductLineComponent
      }, {
        path: 'product',
        component: BProductComponent
      }, {
        path: 'cluster',
        component: BClusterComponent
      }, {
        path: 'user',
        component: BUserComponent
      }, {
        path: '',
        redirectTo: 'campaign',
        pathMatch: 'full'
      }
    ]
  }, {
    path: 'distribution',
    component: DistributionComponent,
    children: [
      {
        path: 'group',
        component: DGroupRetailerComponent
      }, {
        path: 'retailer',
        component: DRetailerComponent
      }, {
        path: 'store',
        component: DStoreComponent
      }, {
        path: '',
        redirectTo: 'group',
        pathMatch: 'full'
      }
    ]
  }, {
    path: 'consumers',
    component: ConsumersComponent,
    children: [
      {
        path: 'consumer',
        component: CConsumerComponent
      }, {
        path: 'payment',
        component: CPaymentComponent
      }, {
        path: '',
        redirectTo: 'consumer',
        pathMatch: 'full'
      }
    ]
  }, {
    path: 'tickets',
    component: TicketsComponent,
    children: [
      {
        path: 'ticket',
        component: TicketComponent
      }, {
        path: 'review',
        component: ReviewComponent
      }, {
        path: '',
        redirectTo: 'ticket',
        pathMatch: 'full'
      }
    ]
  }, {
    path: 'configuration',
    component: ConfigurationComponent,
    children: [
      {
        path: 'company',
        component: CCompanyRoleComponent
      }, {
        path: 'brand',
        component: CBrandRoleComponent
      }, {
        path: 'category',
        component: CCategoryComponent
      }, {
        path: '',
        redirectTo: 'company',
        pathMatch: 'full'
      }
    ]
  }, {
    path: 'suggestions',
    component: SuggestionsComponent,
    children: [
      {
        path: 'pending',
        component: SPendingComponent
      }, {
        path: 'archived',
        component: SArchivedComponent
      }, {
        path: '',
        redirectTo: 'pending',
        pathMatch: 'full'
      }
    ]
  }, {
    path: 'billing',
    component: BillingComponent,
    children: [
      {
        path: 'billing',
        component: BBillingComponent
      }, {
        path: '',
        redirectTo: 'billing',
        pathMatch: 'full'
      }
    ]
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AnalyticsComponent,
    CompanyComponent,
    BrandComponent,
    CompaniesComponent,
    ProductComponent,
    CampaignComponent,
    ABrandComponent,
    CUserComponent,
    CCommissionComponent,
    BCampaignComponent,
    BBrandComponent,
    BProductLineComponent,
    BProductComponent,
    BClusterComponent,
    BUserComponent,
    DistributionComponent,
    ConsumersComponent,
    TicketsComponent,
    ConfigurationComponent,
    SuggestionsComponent,
    BillingComponent,
    DGroupRetailerComponent,
    DRetailerComponent,
    DStoreComponent,
    CConsumerComponent,
    CPaymentComponent,
    TicketComponent,
    ReviewComponent,
    CCompanyRoleComponent,
    CBrandRoleComponent,
    CCategoryComponent,
    SPendingComponent,
    SArchivedComponent,
    BBillingComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Routes } from '@angular/router';
import { NotesComponent } from './components/notes/notes.component';
import { ReportComponent } from './components/report/report.component';
import { OrdersComponent } from './components/orders/orders.component';
import { PaymentsComponent } from './components/payments/payments.component';
import { ExpensesComponent } from './components/expenses/expenses.component';
import { SalesComponent } from './components/sales/sales.component';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'inventory', component: InventoryComponent },
  { path: 'invoice', component: InvoiceComponent },
  { path: 'sales', component: SalesComponent },
  { path: 'expenses', component: ExpensesComponent },
  { path: 'payments', component: PaymentsComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'report', component: ReportComponent },
  { path: 'notes', component: NotesComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];
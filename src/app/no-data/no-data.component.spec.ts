import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { NoDataComponent } from './no-data.component';
import { NoDataService } from './shared/no-data.service';
import { NoData } from './shared/no-data.model';

describe('a no-data component', () => {
	let component: NoDataComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpModule],
			providers: [
				{ provide: NoDataService, useClass: MockNoDataService },
				NoDataComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([NoDataComponent], (NoDataComponent) => {
		component = NoDataComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});

// Mock of the original no-data service
class MockNoDataService extends NoDataService {
	getList(): Observable<any> {
		return Observable.from([ { id: 1, name: 'One'}, { id: 2, name: 'Two'} ]);
	}
}

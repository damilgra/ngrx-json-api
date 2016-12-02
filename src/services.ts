import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { Store } from '@ngrx/store';

import { NgrxJsonApiSelectors } from './selectors';
import {
  ApiCreateInitAction,
  ApiReadInitAction,
  ApiUpdateInitAction,
  ApiDeleteInitAction,
  DeleteFromStateAction,
} from './actions';
import {
  NgrxJsonApiStore,
  ResourceQuery,
  Payload,
  QueryType
} from './interfaces';

@Injectable()
export class NgrxJsonApiService<T> {

  constructor(
    private store: Store<T>,
    private selectors: NgrxJsonApiSelectors<T>) {}

  public select$(query: ResourceQuery) {
    return this.selectors.get$(query);
  }

  public create(payload: Payload) {
    this.store.dispatch(new ApiCreateInitAction(payload));
  }

  public read(payload: Payload) {
    this.store.dispatch(new ApiReadInitAction(payload));
  }

  public update(payload: Payload) {
    this.store.dispatch(new ApiUpdateInitAction(payload));
  }

  public delete(payload: Payload) {
    this.store.dispatch(new ApiDeleteInitAction(payload));
  }

  public deleteFromState(payload: Payload) {
    this.store.dispatch(new DeleteFromStateAction(payload));
  }
}

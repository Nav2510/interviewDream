import { Injectable } from '@angular/core';
import { ProfileMainInfoFragment } from '../../../../graphql/documents/fragments/profile/profile-main-info.graphql-gen';
import { Adapter } from '../../../core/adapter';

export class MainInfoModel {
  constructor(
    public email: string,
    public designation: string,
    public currentLocation: string,
    public username: string,
    public github: string,
    public linkedin: string,
    public instagram: string,
    public fullName: string,
  ) {}
}

@Injectable({
  providedIn: 'root',
})
export class MainInfoAdapter implements Adapter<MainInfoModel> {
  adapt(item: ProfileMainInfoFragment) {
    return new MainInfoModel(
      item.email,
      item.designation,
      item.currentLocation,
      item.username,
      item.contactInfo?.github,
      item.contactInfo?.linkedin,
      item.contactInfo?.instagram,
      item.basicInfo?.fullName,
    );
  }
}

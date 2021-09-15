import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ProfileMainInfoFragment } from '../../../../../graphql/documents/fragments/profile/profile-main-info.graphql-gen';
import { Adapter } from '../../../../core/adapter';

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
    public profileSrc: string,
    public backgroundSrc: string,
  ) {}
}
@Injectable({
  providedIn: 'root',
})
export class MainInfoAdapter implements Adapter<MainInfoModel> {
  adapt(item: ProfileMainInfoFragment) {
    const profilePath = item.profileImagePath
      ? `${environment.baseURI}/${item.profileImagePath}`
      : '../../../../../assets/icons/user.svg';
    const backgroundPath = `${environment.baseURI}/${item.bgImagePath}`;
    return new MainInfoModel(
      item.email,
      item.designation,
      item.currentLocation,
      item.username,
      item.contactInfo?.github,
      item.contactInfo?.linkedin,
      item.contactInfo?.instagram,
      item.basicInfo?.fullName,
      profilePath,
      backgroundPath,
    );
  }
}

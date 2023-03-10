import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import * as React from 'react';
import * as ReactDom from 'react-dom';

import { IPropertyFieldGroupOrPerson, IPropertyFieldSite, IPropertyFieldSitePickerProps, PropertyFieldSitePicker } from '@pnp/spfx-property-controls';
import * as strings from 'HelloWorldWebPartStrings';
import { HelloWorld } from './components/HelloWorld';



export interface IHelloWorldWebPartProps {
  people: IPropertyFieldGroupOrPerson[] | undefined;
  sites: IPropertyFieldSite[] | undefined;
}

export default class HelloWorldWebPart extends BaseClientSideWebPart<IHelloWorldWebPartProps> {

  public render(): void {

    ReactDom.render(<HelloWorld context={this.context}/>, this.domElement);
  }




  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyFieldSitePicker('sites', {
                  label: 'Select sites',
                  initialSites: this.properties.sites ?? [],
                  context: this.context as unknown as IPropertyFieldSitePickerProps['context'],
                  deferredValidationTime: 500,
                  multiSelect: true,
                  onPropertyChange: this.onPropertyPaneFieldChanged,
                  properties: this.properties,
                  key: 'sitesFieldId'
                })

              ]
            }
          ]
        }
      ]
    };
  }
}

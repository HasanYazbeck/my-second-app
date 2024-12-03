import {
  SPHttpClient,
  SPHttpClientResponse,
  ISPHttpClientOptions,
} from '@microsoft/sp-http-base';
import ColumnDefinition from '../interfaces/ColumnDefinition';
import { FieldTypeKind } from '../Enums/enums';
import ISPItem from '../interfaces/ISPItem';

type listDefinition = {
  Title: string,
  Description: string,
  AllowContentTypes: boolean,
  BaseTemplate: number,
  ContentTypesEnabled: boolean,
}

export class SPCrudOperations {
  private listName: string;
  private siteUrl: string;
  private spHttpClient: SPHttpClient;
  private select? : string;

  constructor(spHttpClient: SPHttpClient, siteUrl: string, listName: string , select?: string) {
    this.spHttpClient = spHttpClient;
    this.siteUrl = siteUrl;
    this.listName = listName;
    this.select = select;
  }

  // Create List
  public async _createList(listName: string,listDescription: string): Promise<void> {
    const listUrl: string = `${this.siteUrl}/_api/web/lists/GetByTitle('${this.listName}')`;
    try {
      const response: SPHttpClientResponse = await this.spHttpClient.get(
        listUrl,
        SPHttpClient.configurations.v1
      );

      if (response.status === 200) {
        alert('A List already exists with this name.');
        return;
      }
      if (response.status === 404) {
        const url: string = `${this.siteUrl}/_api/web/lists`;
        const listDefinition: listDefinition = {
          Title: listName,
          Description: listDescription,
          AllowContentTypes: true,
          BaseTemplate: 100,
          ContentTypesEnabled: true,
        };

        const spHttpClientOptions: ISPHttpClientOptions = {
          body: JSON.stringify(listDefinition),
        };
        const createResponse: SPHttpClientResponse =
          await this.spHttpClient.post(
            url,
            SPHttpClient.configurations.v1,
            spHttpClientOptions
          );

        if (createResponse.status === 201) {
          alert('A new List has been created successfully.');
        } else {
          const responseJson: JSON = await createResponse.json();
          alert(
            'Error Message' +
              response.status +
              ' - ' +
              JSON.stringify(responseJson)
          );
        }
      } else {
        const responseJson: JSON = await response.json();

        alert(
          'Error Message' +
            response.status +
            ' - ' +
            JSON.stringify(responseJson)
        );
      }
    } catch (error) {
      console.error('Error creating item:', error);
      throw error;
    }
  }

  // Add columns to List
  public async _addColumnToList(
    columnName: string,
    columnType: FieldTypeKind
  ): Promise<void> {
    const url: string = `${this.siteUrl}/_api/web/lists/getByTitle('${this.listName}')/fields`;
    const columnDefinition: ColumnDefinition = {
      Title: columnName,
      FieldTypeKind: columnType, // Change based on the type of column
      Required: false,
    };

    const spHttpClientOptions: ISPHttpClientOptions = {
      body: JSON.stringify(columnDefinition),
    };

    try {
      const response = await this.spHttpClient.post(
        url,
        SPHttpClient.configurations.v1,
        spHttpClientOptions
      );
      if (response.status === 201) {
        alert('Column added successfully.');
      } else {
        const responseJson = await response.json();
        alert('Error adding column: ' + JSON.stringify(responseJson));
      }
    } catch (error) {
      console.error('Error adding column:', error);
      throw error;
    }
  }

  // Delete columns from List
  public async _deleteColumnFromList(columnName: string): Promise<void> {
    const url: string = `${this.siteUrl}/_api/web/lists/getByTitle('${this.listName}')/fields/getByTitle('${columnName}')`;

    try {
      const response = await this.spHttpClient.post(
        url,
        SPHttpClient.configurations.v1,
        {
          headers: {
            'X-HTTP-Method': 'DELETE',
            'IF-MATCH': '*',
          },
        }
      );
      if (response.status === 204) {
        alert('Column deleted successfully.');
      } else {
        const responseJson = await response.json();
        alert('Error deleting column: ' + JSON.stringify(responseJson));
      }
    } catch (error) {
      console.error('Error deleting column:', error);
      throw error;
    }
  }

  //Insert item List
  public async _insertItem(item: ISPItem): Promise<void> {
    const url: string = `${this.siteUrl}/_api/web/lists/getByTitle('${this.listName}')/items`;
    const spHttpClientOptions: ISPHttpClientOptions = {
      body: JSON.stringify(item),
    };

    try {
      const response: SPHttpClientResponse = await this.spHttpClient.post(
        url,
        SPHttpClient.configurations.v1,
        spHttpClientOptions
      );

      if (response.status === 201) {
        //the item is created for response code 201
        alert('A new Item inserted successfully.');
      } else {
        const responseJson = await response.json();
        alert(
          'Error Message : ' +
            response.status +
            ' - ' +
            JSON.stringify(responseJson)
        );
      }
    } catch (error) {
      console.error('Error creating item:', error);
      throw error;
    }
  }

  //Get Items List 
  public async _getItems(): Promise<any[]> {
    const url: string = `${this.siteUrl}/_api/web/lists/getbytitle('${this.listName}')/items`;

    try {
      const response = await this.spHttpClient.get(
        url,
        SPHttpClient.configurations.v1
      );
      if (response.status === 200) {
        const responseData: any = await response.json();
        // console.log('Items retrieved successfully:', responseData.value);
        return responseData.value;
      } else {
        const responseError: any = await response.json();
        console.log(`Error retrieving items. Status: ${responseError.status}`,responseError);
        // alert('Error Message' + JSON.stringify(responseError));
        throw new Error(`Error retrieving items. Status: ${responseError.status}`
        );
      }
    } catch (error) {
      console.error('Error Retreiving Items', error);
      throw error;
    }
  }

  //Get Items List by Filter
  public async _getItemsbyFilter(): Promise<any[]> {
    const url: string = `${this.siteUrl}/_api/web/lists/getbytitle('${this.listName}')/items/${this.select}`;

    try {
      const response = await this.spHttpClient.get(
        url,
        SPHttpClient.configurations.v1
      );
      if (response.status === 200) {
        const responseData: any = await response.json();
        // console.log('Items retrieved successfully:', responseData.value);
        return responseData.value;
      } else {
        const responseError: any = await response.json();
        console.log(`Error retrieving items. Status: ${responseError.status}`,responseError);
        // alert('Error Message' + JSON.stringify(responseError));
        throw new Error(`Error retrieving items. Status: ${responseError.status}`
        );
      }
    } catch (error) {
      console.error('Error Retreiving Items', error);
      throw error;
    }
  }

  //Get Item List By Id or Title
  public async _getItemById(id: string): Promise<ISPItem> {
    const url: string = `${this.siteUrl}/_api/web/lists/getbytitle(${this.listName})/items?filter=Id eq ${id}`;

    try {
      return this.spHttpClient.get(url, SPHttpClient.configurations.v1)
        .then((response: SPHttpClientResponse) => {
          return response.json();
        })
        .then((itemsList: any) => {
          const tempItem: any = itemsList.value[0];
          const listItem: ISPItem = tempItem as ISPItem; //Cast as interface ISPItem
          return listItem;
        }) as Promise<ISPItem>;
    } catch (error) {
      console.error('Error Retreiving Item', error);
      throw error;
    }
  }

  //Update Item
  public async _updateItem(itemId: string,item: ISPItem): Promise<SPHttpClientResponse> {
    const url: string = `${this.siteUrl}/_api/web/lists/getbytitle('${this.listName}')/items(${itemId})`;
    const spHttpClientOptions: ISPHttpClientOptions = {
      headers: {
        'X-HTTP-Method': 'MERGE',
        'IF-MATCH': '*',
      },
      body: JSON.stringify(item),
    };
    try {
      const response: SPHttpClientResponse = await this.spHttpClient.post(
        url,
        SPHttpClient.configurations.v1,
        spHttpClientOptions
      );
      if (response.ok) {
        console.log('Item updated successfully');
        return response;
      } else {
        const errorResponse: any = await response.json();
        console.error(
          `Error updating item. Status: ${response.status}`,
          errorResponse
        );
        throw new Error(`Error updating item. Status: ${response.status}`);
      }
    } catch (error) {
      console.error('Error updating item:', error);
      throw error;
    }
  }

  //Delete Item
  public async _deleteItem(itemId: number): Promise<void> {
    const url: string = `${this.siteUrl}/_api/web/lists/getbytitle('${this.listName}')/items(${itemId})`;
    const spHttpClientOptions: ISPHttpClientOptions = {
      headers: {
        'X-HTTP-Method': 'DELETE',
        'IF-MATCH': '*',
      },
    };

    try {
      const response: SPHttpClientResponse = await this.spHttpClient.post(
        url,
        SPHttpClient.configurations.v1,
        spHttpClientOptions
      );
      if (response.ok) {
        console.log('Item deleted successfully');
      } else {
        const errorResponse: any = await response.json();
        console.error(
          `Error deleting item. Status: ${response.status}`,
          errorResponse
        );
        throw new Error(`Error deleting item. Status: ${response.status}`);
      }
    } catch (error) {
      console.error('Error deleting item:', error);
      throw error;
    }
  }



}

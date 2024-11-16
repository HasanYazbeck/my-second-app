export class SPHelpers {

public groupBy<T>(array: T[], key: keyof T): Record<string, T[]> {
    return array.reduce((result, currentItem) => {
      const groupKey = currentItem[key] as unknown as string; // Cast to string
      if (!result[groupKey]) {
        result[groupKey] = [];
      }
      result[groupKey].push(currentItem);
      return result;
    }, {} as Record<string, T[]>);
  } 
  
  public GroupBy<T, K extends keyof any>(arr: T[], key: (item: T) => K): Record<K, T[]> {
    return arr.reduce((groups, item) => {
      (groups[key(item)] ||= []).push(item);
      return groups;
    }, {} as Record<K, T[]>);
  }

  public GroupByNestedPropery<T>(arr: T[], key: string): Record<string, T[]> {
    return arr.reduce((groups, item) => {
      // Helper to retrieve nested property value by a dot-separated path
      const groupKey = key.split('.').reduce((obj, keyPart) => 
        {
        return (obj as any)?.[keyPart]; // Using "as any" to handle dynamic nested access
      }, item) as unknown as string;
      
      if (groupKey) {
        (groups[groupKey] ||= []).push(item);
      }
      return groups;
    }, {} as Record<string, T[]>);
  }
  
  public GetImageFullPathByName(image?:string) : string {
    try{
      const path = require(`./assets/${image}`);
      return path && path;
    }catch(ex){
      console.error(ex);
      return ex;
    }
  }

}






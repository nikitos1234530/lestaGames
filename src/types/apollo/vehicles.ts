export interface Icons {
    large: string;
    medium: string;
  }
  
  interface Type {
    name: string;
    title: string;
    icons: {
      default: string;
    };
  }
  
  export interface Nation {
    name: string;
    title: string;
    color: string;
    icons: {
      small: string;
      medium: string;
      large: string;
    };
  }
  
  export interface Vehicle {
    title: string;
    description: string;
    icons: Icons;
    level: number;
    type: Type;
    nation: Nation;
  }
  
  export interface VehiclesQueryResult {
    vehicles: Vehicle[];
  }
export interface VenomEngineContract {
  create: ( sessionName: string ) => Promise<any>
}
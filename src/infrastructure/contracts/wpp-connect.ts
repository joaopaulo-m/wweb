export interface WppConnectEngineContract {
  create: (sessionName: string) => Promise<string>
}
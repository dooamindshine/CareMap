import { SessionSeverObject } from "models/session_type";

export interface SessionState {
   session: SessionSeverObject | null
   sessionId: number
}

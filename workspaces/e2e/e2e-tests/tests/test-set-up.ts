import {
    cleanEnv,
    str,
} from 'envalid'

export const GLOBALS = { env: cleanEnv(process.env, {
    SWAG_LABS_URL: str(),
    },
) }
import Message = require("./Message");
import WebhookClient = require("./WebhookClient");
import { Client, Snowflake, Guild, Channel, User, GuildMember } from "discord.js";

declare class INTERACTION_CREATE {
    constructor(client: Client, data: object);
    client: Client;
    id: string;
    version: number;
    token: string;
    discordID: Snowflake;
    applicationID: Snowflake;
    guild: Guild;
    channel: Channel;
    clicker: {
        user?: User,
        member?: GuildMember
    };
    message: Message;
    webhook: WebhookClient;
    replied: boolean;
    deferred: boolean;
    /**
     * Defer that this callback has been handled
     */
    defer(ephemeral: boolean): Promise<void>;
    /**
     * Wait on responding. This will give you up to 15 minutes to this button press.
     */
    think(ephemeral: boolean): Promise<void>;
    /**
     * Respond with a message that only the person who clicked the button can see
     * @param message The message to respond with
     */
    respond(message: string): Promise<void>;
    get reply(): {
        send: (content: string, options?: object) => Promise<void>;
        fetch: () => Promise<string>;
        edit: (content: any, options?: object) => Promise<any>;
        delete: () => Promise<void>;
    };
}

export = INTERACTION_CREATE;
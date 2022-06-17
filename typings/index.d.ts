import type { EventEmitter } from 'node:events';
import type {
    Client,
    Collection,
    ColorResolvable,
    EmojiIdentifierResolvable,
    GuildMember,
    Message,
    MessageActionRow,
    MessageActionRowOptions,
    MessageEmbed,
    MessageEmbedOptions,
    MessageMentionOptions,
    MessageReaction,
    NewsChannel,
    PermissionResolvable,
    Snowflake,
    TextChannel,
    ThreadChannel,
    User,
<<<<<<< HEAD
    Role
=======
    Awaitable
>>>>>>> 4449fbaf40568cd7b16f377513270139ee7280bd
} from 'discord.js';

export const version: string;
export class GiveawaysManager<ExtraData = any> extends EventEmitter {
    constructor(client: Client, options?: GiveawaysManagerOptions<ExtraData>, init?: boolean);

    public client: Client;
    public giveaways: Giveaway<ExtraData>[];
    public options: GiveawaysManagerOptions<ExtraData>;
    public ready: boolean;

    public delete(messageId: Snowflake, doNotDeleteMessage?: boolean): Promise<Giveaway<ExtraData>>;
    public deleteGiveaway(messageId: Snowflake): Promise<boolean>;
    public edit(messageId: Snowflake, options: GiveawayEditOptions<ExtraData>): Promise<Giveaway<ExtraData>>;
    public end(messageId: Snowflake, noWinnerMessage?: string | MessageObject): Promise<GuildMember[]>;
    public reroll(messageId: Snowflake, options?: GiveawayRerollOptions): Promise<GuildMember[]>;
    public start(
        channel: TextChannel | NewsChannel | ThreadChannel,
        options: GiveawayStartOptions<ExtraData>
    ): Promise<Giveaway<ExtraData>>;
    public pause(
        messageId: Snowflake,
        options?: Omit<PauseOptions, 'isPaused' | 'durationAfterPause'>
    ): Promise<Giveaway<ExtraData>>;
    public unpause(messageId: Snowflake): Promise<Giveaway<ExtraData>>;

    public on<K extends keyof GiveawaysManagerEvents<ExtraData>>(
        event: K,
        listener: (...args: GiveawaysManagerEvents<ExtraData>[K]) => void
    ): this;

    public once<K extends keyof GiveawaysManagerEvents<ExtraData>>(
        event: K,
        listener: (...args: GiveawaysManagerEvents<ExtraData>[K]) => void
    ): this;

    public emit<K extends keyof GiveawaysManagerEvents<ExtraData>>(
        event: K,
        ...args: GiveawaysManagerEvents<ExtraData>[K]
    ): boolean;
}
export interface BonusEntry<ExtraData> {
    bonus(member: GuildMember, giveaway: Giveaway<ExtraData>): Awaitable<number>;
    cumulative?: boolean;
}
export interface LastChanceOptions {
    enabled?: boolean;
    embedColor?: ColorResolvable;
    content?: string;
    threshold?: number;
}
export interface PauseOptions {
    isPaused?: boolean;
    content?: string;
    unPauseAfter?: number | null;
    embedColor?: ColorResolvable;
    durationAfterPause?: number | null;
    infiniteDurationText?: string;
}
export interface GiveawaysManagerOptions<ExtraData> {
    storage?: string;
    forceUpdateEvery?: number;
    endedGiveawaysLifetime?: number;
    default?: {
        botsCanWin?: boolean;
        exemptPermissions?: PermissionResolvable[];
        exemptMembers?: (member: GuildMember, giveaway: Giveaway<ExtraData>) => Awaitable<boolean>;
        embedColor?: ColorResolvable;
        embedColorEnd?: ColorResolvable;
        reaction?: EmojiIdentifierResolvable;
        lastChance?: LastChanceOptions;
    };
}
export interface GiveawayStartOptions<ExtraData> {
    prize: string;
    winnerCount: number;
    duration?: number; // can be null for drops
    hostedBy?: User;
    botsCanWin?: boolean;
    exemptPermissions?: PermissionResolvable[];
    exemptMembers?: (member: GuildMember, giveaway: Giveaway<ExtraData>) => Awaitable<boolean>;
    bonusEntries?: BonusEntry<ExtraData>[];
    embedColor?: ColorResolvable;
    embedColorEnd?: ColorResolvable;
    reaction?: EmojiIdentifierResolvable;
    messages?: GiveawaysMessages;
    thumbnail?: string;
<<<<<<< HEAD
    banner?: string;
=======
    image?: string;
>>>>>>> 4449fbaf40568cd7b16f377513270139ee7280bd
    extraData?: ExtraData;
    lastChance?: LastChanceOptions;
    pauseOptions?: PauseOptions;
    isDrop?: boolean;
    allowedMentions?: Omit<MessageMentionOptions, 'repliedUser'>;
    role?: Role;
}
export interface GiveawaysMessages {
    giveaway?: string;
    giveawayEnded?: string;
    inviteToParticipate?: string;
    timeRemaining?: string;
    winMessage?: string | MessageObject;
    drawing?: string;
    dropMessage?: string;
    embedFooter?: string | { text?: string; iconURL?: string };
    noWinner?: string;
    winners?: string;
    endedAt?: string;
    hostedBy?: string;
}
export interface MessageObject {
    content?: string;
    embed?: MessageEmbed | MessageEmbedOptions;
    components: (MessageActionRow | MessageActionRowOptions)[];
    replyToGiveaway?: boolean;
}
export interface GiveawaysManagerEvents<ExtraData = any> {
    giveawayDeleted: [Giveaway<ExtraData>];
    giveawayEnded: [Giveaway<ExtraData>, GuildMember[]];
    giveawayRerolled: [Giveaway<ExtraData>, GuildMember[]];
    giveawayReactionAdded: [Giveaway<ExtraData>, GuildMember, MessageReaction];
    giveawayReactionRemoved: [Giveaway<ExtraData>, GuildMember, MessageReaction];
    endedGiveawayReactionAdded: [Giveaway<ExtraData>, GuildMember, MessageReaction];
}
export class Giveaway<ExtraData = any> extends EventEmitter {
    constructor(manager: GiveawaysManager<ExtraData>, options: GiveawayData<ExtraData>);

    public channelId: Snowflake;
    public client: Client;
    public endAt: number;
    public ended: boolean;
    public guildId: Snowflake;
    public hostedBy?: User;
    public manager: GiveawaysManager<ExtraData>;
    public message: Message | null;
    public messageId: Snowflake;
    public messages: Required<GiveawaysMessages>;
    public thumbnail?: string;
<<<<<<< HEAD
    public banner?: string;
=======
    public image?: string;
>>>>>>> 4449fbaf40568cd7b16f377513270139ee7280bd
    public extraData?: ExtraData;
    public options: GiveawayData<ExtraData>;
    public prize: string;
    public startAt: number;
    public winnerCount: number;
    public winnerIds: Snowflake[];
    public allowedMentions?: Omit<MessageMentionOptions, 'repliedUser'>;
    private endTimeout?: NodeJS.Timeout;
    private isEnding?: boolean;

    // getters calculated using default manager options
    readonly exemptPermissions: PermissionResolvable[];
    readonly embedColor: ColorResolvable;
    readonly embedColorEnd: ColorResolvable;
    readonly botsCanWin: boolean;
    readonly reaction: EmojiIdentifierResolvable;
    readonly lastChance: Required<LastChanceOptions>;

    // getters calculated using other values
    readonly remainingTime: number;
    readonly duration: number;
    readonly messageURL: string;
    readonly exemptMembersFunction: Function | null;
    readonly bonusEntries: BonusEntry<ExtraData>[];
    readonly data: GiveawayData<ExtraData>;
    readonly pauseOptions: Required<PauseOptions>;
    readonly isDrop: boolean;
    readonly messageReaction: MessageReaction | null;

    private ensureEndTimeout(): void;
    private checkWinnerEntry(user: User): Promise<boolean>;
    public checkBonusEntries(user: User): Promise<number>;
    public fetchAllEntrants(): Promise<Collection<Snowflake, User>>;
    public fillInString(string: string): string;
    public fillInString(string: unknown): string | null;
    public fillInEmbed(embed: MessageEmbed | MessageEmbedOptions): MessageEmbed;
    public fillInEmbed(embed: unknown): MessageEmbed | null;
    public fillInComponents(components: (MessageActionRow | MessageActionRowOptions)[]): MessageActionRow[];
    public fillInComponents(components: unknown): MessageActionRow[] | null;
    public exemptMembers(member: GuildMember): Promise<boolean>;
    public fetchMessage(): Promise<Message>;
    public edit(options: GiveawayEditOptions<ExtraData>): Promise<Giveaway<ExtraData>>;
    public end(noWinnerMessage?: string | MessageObject): Promise<GuildMember[]>;
    public reroll(options?: GiveawayRerollOptions): Promise<GuildMember[]>;
    public roll(winnerCount?: number): Promise<GuildMember[]>;
    public pause(options?: Omit<PauseOptions, 'isPaused' | 'durationAfterPause'>): Promise<Giveaway<ExtraData>>;
    public unpause(): Promise<Giveaway<ExtraData>>;
}
export interface GiveawayEditOptions<ExtraData> {
    newWinnerCount?: number;
    newPrize?: string;
    addTime?: number;
    setEndTimestamp?: number;
    newMessages?: GiveawaysMessages;
    newThumbnail?: string;
    newImage?: string;
    newBonusEntries?: BonusEntry<ExtraData>[];
    newExemptMembers?: (member: GuildMember, giveaway: Giveaway<ExtraData>) => Awaitable<boolean>;
    newExtraData?: ExtraData;
    newLastChance?: LastChanceOptions;
}
export interface GiveawayRerollOptions {
    winnerCount?: number;
    messages?: {
        congrat?: string | MessageObject;
        error?: string | MessageObject;
        replyWhenNoWinner?: boolean;
    };
}
export interface GiveawayData<ExtraData = any> {
    startAt: number;
    endAt: number;
    winnerCount: number;
    messages: Required<GiveawaysMessages>;
    prize: string;
    channelId: Snowflake;
    guildId: Snowflake;
    ended: boolean;
    winnerIds?: Snowflake[];
    messageId: Snowflake;
    reaction?: EmojiIdentifierResolvable;
    exemptPermissions?: PermissionResolvable[];
    exemptMembers?: string;
    bonusEntries?: string;
    embedColor?: ColorResolvable;
    embedColorEnd?: ColorResolvable;
    thumbnail?: string;
<<<<<<< HEAD
    banner?: string;
=======
    image?: string;
>>>>>>> 4449fbaf40568cd7b16f377513270139ee7280bd
    hostedBy?: string;
    extraData?: ExtraData;
    lastChance?: LastChanceOptions;
    pauseOptions?: PauseOptions;
    isDrop?: boolean;
    allowedMentions?: Omit<MessageMentionOptions, 'repliedUser'>;
    role?: Role;
}

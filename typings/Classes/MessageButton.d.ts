import INTERACTION_CREATE from "./INTERACTION_CREATE";

interface ButtonData {
    style?: string;
    label?: string;
    disabled?: boolean;
    url?: string;
    id?: string;
}

declare class MessageButton {
    constructor(data?: ButtonData);
    setup(data: ButtonData): MessageButton;
    style: string;
    label: string;
    disabled: boolean;
    url: string;
    /**
     * Getter-setter alias for `id` and `setID(id)`
     */
    id: string;
    custom_id: string;
    type: number;
    /**
     * Check if this was the button pressed in a speciic event
     * @param event A `buttonClick` event
     */
    match(event: INTERACTION_CREATE): boolean;
    setStyle(style: string): this;
    setLabel(label: string): this;
    setDisabled(boolean: boolean): this;
    setURL(url: string): this;
    setID(id: string): this;
    setEmoji(emoji: string | any): this;
    toJSON(): {
        type: number;
        style: string;
        label: string;
        emoji: string;
        disabled: boolean;
        url: string;
        custom_id: string;
    };
}

export = MessageButton;

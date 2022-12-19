/**
 * A choice that can be made in a dialog **by the player**.
 */
export type DialogChoice = {
    text: string;
    onClick: () => void;
};

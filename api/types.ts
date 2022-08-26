export type Notice = {
    id: number;
    title: string;
    url: string;
    isPin: boolean;
    isBookmark: boolean;
};

export type College = {
    id: number;
    name: string;
    majors: Array<Major>;
};

export type Major = {
    name: string;
};

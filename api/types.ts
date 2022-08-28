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

export type NoticePage = {
    content: Array<Notice>;
    pageable: {
        sort: {
            empty: boolean;
            sorted: boolean;
            unsorted: boolean;
        };
        offset: number;
        pageNumber: number;
        pageSize: number;
        paged: boolean;
        unpaged: boolean;
    };
    last: boolean;
    totalPages: number;
    totalElements: number;
    size: number;
    number: number;
    sort: {
        empty: boolean;
        sorted: boolean;
        unsorted: boolean;
    };
    first: boolean;
    numberOfElements: number;
    empty: boolean;
};

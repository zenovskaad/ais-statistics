export type AverageDayItem = {
    state: string;
    value: number;
};

export type ClosedVacanciesItem = {
    year: number;
    // data: any[];
};

export type ImportsItem = {
    hrName: string,
    hrEmail: string,
    date: string,
    imported: number,
    duplicate: number,
    error: number,
}

export type ImportStatisticItem = {
    status: string,
    value: number,
}

export type Pagination = {
    currentPage: number
    totalCount: number
}

export type ImportsDataStore = {
    importsData: Array<ImportsItem>
    pagination: Pagination
    // loadingStatus: LoadingStatus
    tabRequests: {
        period: string
    }
}
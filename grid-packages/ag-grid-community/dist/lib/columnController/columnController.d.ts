import { ColumnGroup } from '../entities/columnGroup';
import { Column } from '../entities/column';
import { ColDef, ColGroupDef, IAggFunc } from '../entities/colDef';
import { ColumnGroupChild } from '../entities/columnGroupChild';
import { OriginalColumnGroupChild } from '../entities/originalColumnGroupChild';
import { ColumnEventType } from '../events';
import { BeanStub } from "../context/beanStub";
import { OriginalColumnGroup } from '../entities/originalColumnGroup';
import { RowNode } from '../entities/rowNode';
import { ApplyColumnStateParams } from './columnApi';
export interface ColumnResizeSet {
    columns: Column[];
    ratios: number[];
    width: number;
}
export interface ColumnState {
    colId?: string;
    hide?: boolean | null;
    aggFunc?: string | IAggFunc | null;
    width?: number | undefined;
    pivot?: boolean | null;
    pivotIndex?: number | null;
    pinned?: boolean | string | 'left' | 'right' | null;
    rowGroup?: boolean | null;
    rowGroupIndex?: number | null;
    flex?: number | null;
    sort?: string | null;
    sortIndex?: number | null;
}
export declare class ColumnController extends BeanStub {
    private gridOptionsWrapper;
    private expressionService;
    private columnFactory;
    private displayedGroupCreator;
    private autoWidthCalculator;
    private columnUtils;
    private columnAnimationService;
    private autoGroupColService;
    private aggFuncService;
    private valueCache;
    private animationFrameService;
    private rowModel;
    private columnApi;
    private gridApi;
    private sortController;
    private columnDefFactory;
    private primaryColumnTree;
    private primaryHeaderRowCount;
    private primaryColumns;
    private secondaryBalancedTree;
    private secondaryColumns;
    private secondaryHeaderRowCount;
    private secondaryColumnsPresent;
    private columnsForQuickFilter;
    private gridBalancedTree;
    private gridColumns;
    private gridHeaderRowCount;
    private lastPrimaryOrder;
    private gridColsArePrimary;
    private displayedLeftColumnTree;
    private displayedRightColumnTree;
    private displayedCentreColumnTree;
    private displayedLeftHeaderRows;
    private displayedRightHeaderRows;
    private displayedCentreHeaderRows;
    private displayedLeftColumns;
    private displayedRightColumns;
    private displayedCenterColumns;
    private allDisplayedColumns;
    private allDisplayedVirtualColumns;
    private allDisplayedCenterVirtualColumns;
    private colSpanActive;
    private autoRowHeightColumns;
    private suppressColumnVirtualisation;
    private rowGroupColumns;
    private valueColumns;
    private pivotColumns;
    private groupAutoColumns;
    private groupDisplayColumns;
    private ready;
    private logger;
    private autoGroupsNeedBuilding;
    private forceRecreateAutoGroups;
    private pivotMode;
    private usingTreeData;
    private scrollWidth;
    private scrollPosition;
    private bodyWidth;
    private leftWidth;
    private rightWidth;
    private bodyWidthDirty;
    private viewportLeft;
    private viewportRight;
    private flexViewportWidth;
    private columnDefs;
    private colDefVersion;
    private flexColsCalculatedAtLestOnce;
    init(): void;
    onAutoGroupColumnDefChanged(): void;
    getColDefVersion(): number;
    setColumnDefs(columnDefs: (ColDef | ColGroupDef)[], source?: ColumnEventType): void;
    private orderGridColumnsLikePrimary;
    isAutoRowHeightActive(): boolean;
    getAllAutoRowHeightCols(): Column[];
    private setVirtualViewportLeftAndRight;
    getDisplayedColumnsStartingAt(column: Column): Column[];
    private checkDisplayedVirtualColumns;
    setVirtualViewportPosition(scrollWidth: number, scrollPosition: number): void;
    isPivotMode(): boolean;
    private isPivotSettingAllowed;
    setPivotMode(pivotMode: boolean, source?: ColumnEventType): void;
    getSecondaryPivotColumn(pivotKeys: string[], valueColKey: Column | string): Column | null;
    private setBeans;
    private setFirstRightAndLastLeftPinned;
    autoSizeColumns(keys: (string | Column)[], skipHeader?: boolean, source?: ColumnEventType): void;
    fireColumnResizedEvent(columns: Column[], finished: boolean, source: ColumnEventType, flexColumns?: Column[]): void;
    autoSizeColumn(key: string | Column | null, skipHeader?: boolean, source?: ColumnEventType): void;
    autoSizeAllColumns(skipHeader?: boolean, source?: ColumnEventType): void;
    private getColumnsFromTree;
    getAllDisplayedColumnGroups(): ColumnGroupChild[] | null;
    getPrimaryColumnTree(): OriginalColumnGroupChild[];
    getHeaderRowCount(): number;
    getLeftDisplayedColumnGroups(): ColumnGroupChild[];
    getRightDisplayedColumnGroups(): ColumnGroupChild[];
    getCenterDisplayedColumnGroups(): ColumnGroupChild[];
    getDisplayedColumnGroups(type: string): ColumnGroupChild[];
    isColumnDisplayed(column: Column): boolean;
    getAllDisplayedColumns(): Column[];
    getAllDisplayedVirtualColumns(): Column[];
    getDisplayedLeftColumnsForRow(rowNode: RowNode): Column[];
    getDisplayedRightColumnsForRow(rowNode: RowNode): Column[];
    private getDisplayedColumnsForRow;
    getAllDisplayedCenterVirtualColumnsForRow(rowNode: RowNode): Column[];
    getAriaColumnIndex(col: Column): number;
    private isColumnInViewport;
    getPinnedLeftContainerWidth(): number;
    getPinnedRightContainerWidth(): number;
    updatePrimaryColumnList(keys: (string | Column)[] | null, masterList: Column[], actionIsAdd: boolean, columnCallback: (column: Column) => void, eventType: string, source?: ColumnEventType): void;
    setRowGroupColumns(colKeys: (string | Column)[], source?: ColumnEventType): void;
    private setRowGroupActive;
    addRowGroupColumn(key: string | Column | null, source?: ColumnEventType): void;
    addRowGroupColumns(keys: (string | Column)[], source?: ColumnEventType): void;
    removeRowGroupColumns(keys: (string | Column)[] | null, source?: ColumnEventType): void;
    removeRowGroupColumn(key: string | Column | null, source?: ColumnEventType): void;
    addPivotColumns(keys: (string | Column)[], source?: ColumnEventType): void;
    setPivotColumns(colKeys: (string | Column)[], source?: ColumnEventType): void;
    addPivotColumn(key: string | Column, source?: ColumnEventType): void;
    removePivotColumns(keys: (string | Column)[], source?: ColumnEventType): void;
    removePivotColumn(key: string | Column, source?: ColumnEventType): void;
    private setPrimaryColumnList;
    setValueColumns(colKeys: (string | Column)[], source?: ColumnEventType): void;
    private setValueActive;
    addValueColumns(keys: (string | Column)[], source?: ColumnEventType): void;
    addValueColumn(colKey: (string | Column) | null | undefined, source?: ColumnEventType): void;
    removeValueColumn(colKey: (string | Column), source?: ColumnEventType): void;
    removeValueColumns(keys: (string | Column)[], source?: ColumnEventType): void;
    private normaliseColumnWidth;
    private getPrimaryOrGridColumn;
    setColumnWidths(columnWidths: {
        key: string | Column;
        newWidth: number;
    }[], shiftKey: boolean, // @takeFromAdjacent - if user has 'shift' pressed, then pixels are taken from adjacent column
    finished: boolean, // @finished - ends up in the event, tells the user if more events are to come
    source?: ColumnEventType): void;
    private checkMinAndMaxWidthsForSet;
    resizeColumnSets(resizeSets: ColumnResizeSet[], finished: boolean, source: ColumnEventType): void;
    setColumnAggFunc(key: string | Column | null | undefined, aggFunc: string, source?: ColumnEventType): void;
    moveRowGroupColumn(fromIndex: number, toIndex: number, source?: ColumnEventType): void;
    moveColumns(columnsToMoveKeys: (string | Column)[], toIndex: number, source?: ColumnEventType): void;
    doesMovePassRules(columnsToMove: Column[], toIndex: number): boolean;
    sortColumnsLikeGridColumns(cols: Column[]): void;
    doesMovePassLockedPositions(proposedColumnOrder: Column[]): boolean;
    doesMovePassMarryChildren(allColumnsCopy: Column[]): boolean;
    moveColumn(key: string | Column, toIndex: number, source?: ColumnEventType): void;
    moveColumnByIndex(fromIndex: number, toIndex: number, source?: ColumnEventType): void;
    getColumnDefs(): (ColDef | ColGroupDef)[];
    getBodyContainerWidth(): number;
    getContainerWidth(pinned: string): number;
    private updateBodyWidths;
    getValueColumns(): Column[];
    getPivotColumns(): Column[];
    isPivotActive(): boolean;
    getRowGroupColumns(): Column[];
    getDisplayedCenterColumns(): Column[];
    getDisplayedLeftColumns(): Column[];
    getDisplayedRightColumns(): Column[];
    getDisplayedColumns(type: string): Column[];
    getAllPrimaryColumns(): Column[] | null;
    getSecondaryColumns(): Column[] | null;
    getAllColumnsForQuickFilter(): Column[];
    getAllGridColumns(): Column[];
    isEmpty(): boolean;
    isRowGroupEmpty(): boolean;
    setColumnVisible(key: string | Column, visible: boolean, source?: ColumnEventType): void;
    setColumnsVisible(keys: (string | Column)[], visible: boolean, source?: ColumnEventType): void;
    setColumnPinned(key: string | Column | null, pinned: string | boolean | null, source?: ColumnEventType): void;
    setColumnsPinned(keys: (string | Column)[], pinned: string | boolean | null, source?: ColumnEventType): void;
    private actionOnGridColumns;
    getDisplayedColBefore(col: Column): Column | null;
    getDisplayedColAfter(col: Column): Column | null;
    getDisplayedGroupAfter(columnGroup: ColumnGroup): ColumnGroup | null;
    getDisplayedGroupBefore(columnGroup: ColumnGroup): ColumnGroup | null;
    getDisplayedGroupAtDirection(columnGroup: ColumnGroup, direction: 'After' | 'Before'): ColumnGroup | null;
    getColumnGroupAtLevel(column: Column, level: number): ColumnGroup | null;
    isPinningLeft(): boolean;
    isPinningRight(): boolean;
    getPrimaryAndSecondaryAndAutoColumns(): Column[];
    private createStateItemFromColumn;
    getColumnState(): ColumnState[];
    private orderColumnStateList;
    resetColumnState(suppressEverythingEvent?: boolean, source?: ColumnEventType): void;
    applyColumnState(params: ApplyColumnStateParams, source?: ColumnEventType): boolean;
    private compareColumnStatesAndRaiseEvents;
    private raiseColumnPinnedEvent;
    private raiseColumnVisibleEvent;
    private raiseColumnMovedEvent;
    private syncColumnWithStateItem;
    getGridColumns(keys: (string | Column)[]): Column[];
    private getColumns;
    getColumnWithValidation(key: string | Column | undefined): Column | null;
    getPrimaryColumn(key: string | Column): Column | null;
    getGridColumn(key: string | Column): Column | null;
    private getColumn;
    private getAutoColumn;
    private columnsMatch;
    getDisplayNameForColumn(column: Column | null, location: string | null, includeAggFunc?: boolean): string | null;
    getDisplayNameForOriginalColumnGroup(columnGroup: ColumnGroup | null, originalColumnGroup: OriginalColumnGroup | null, location: string): string | null;
    getDisplayNameForColumnGroup(columnGroup: ColumnGroup, location: string): string | null;
    private getHeaderName;
    private wrapHeaderNameWithAggFunc;
    getColumnGroup(colId: string | ColumnGroup, instanceId?: number): ColumnGroup | null;
    isReady(): boolean;
    private extractValueColumns;
    private extractRowGroupColumns;
    private extractColumns;
    private extractPivotColumns;
    resetColumnGroupState(source?: ColumnEventType): void;
    getColumnGroupState(): {
        groupId: string;
        open: boolean;
    }[];
    setColumnGroupState(stateItems: {
        groupId: string;
        open: boolean | undefined;
    }[], source?: ColumnEventType): void;
    setColumnGroupOpened(key: OriginalColumnGroup | string | undefined, newValue: boolean, source?: ColumnEventType): void;
    getOriginalColumnGroup(key: OriginalColumnGroup | string): OriginalColumnGroup | null;
    private calculateColumnsForDisplay;
    private checkColSpanActiveInCols;
    private calculateColumnsForGroupDisplay;
    getGroupDisplayColumns(): Column[];
    private updateDisplayedColumns;
    isSecondaryColumnsPresent(): boolean;
    setSecondaryColumns(colDefs: (ColDef | ColGroupDef)[] | null, source?: ColumnEventType): void;
    private processSecondaryColumnDefinitions;
    private updateGridColumns;
    private orderGridColsLikeLastPrimary;
    isPrimaryColumnGroupsPresent(): boolean;
    private setupQuickFilterColumns;
    private putFixedColumnsFirst;
    private addAutoGroupToGridColumns;
    private clearDisplayedColumns;
    private updateGroupsAndDisplayedColumns;
    private updateDisplayedColumnsFromTrees;
    private setupAllDisplayedColumns;
    private setLeftValues;
    private setLeftValuesOfColumns;
    private setLeftValuesOfGroups;
    private addToDisplayedColumns;
    private updateDisplayedCenterVirtualColumns;
    getVirtualHeaderGroupRow(type: string, dept: number): ColumnGroupChild[];
    private updateDisplayedVirtualGroups;
    private updateVirtualSets;
    private filterOutColumnsWithinViewport;
    refreshFlexedColumns(params?: {
        resizingCols?: Column[];
        skipSetLeft?: boolean;
        viewportWidth?: number;
        source?: ColumnEventType;
        fireResizedEvent?: boolean;
        updateBodyWidths?: boolean;
    }): Column[];
    sizeColumnsToFit(gridWidth: any, source?: ColumnEventType, silent?: boolean): void;
    private buildDisplayedTrees;
    private updateOpenClosedVisibilityInColumnGroups;
    getGroupAutoColumns(): Column[] | null;
    private createGroupAutoColumnsIfNeeded;
    private autoColsEqual;
    private getWidthOfColsInList;
    getGridBalancedTree(): OriginalColumnGroupChild[];
    hasFloatingFilters(): boolean;
    getFirstDisplayedColumn(): Column;
}

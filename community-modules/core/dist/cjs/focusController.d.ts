// Type definitions for @ag-grid-community/core v24.1.0
// Project: http://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ag-grid/>
import { BeanStub } from "./context/beanStub";
import { Column } from "./entities/column";
import { CellPosition } from "./entities/cellPosition";
import { RowNode } from "./entities/rowNode";
import { AbstractHeaderWrapper } from "./headerRendering/header/abstractHeaderWrapper";
import { HeaderPosition } from "./headerRendering/header/headerPosition";
import { ColumnGroup } from "./entities/columnGroup";
import { GridCore } from "./gridCore";
export declare class FocusController extends BeanStub {
    private readonly gridOptionsWrapper;
    private readonly columnController;
    private readonly headerNavigationService;
    private readonly columnApi;
    private readonly gridApi;
    private readonly rowRenderer;
    private readonly rowPositionUtils;
    private readonly rangeController;
    private static FOCUSABLE_SELECTOR;
    private static FOCUSABLE_EXCLUDE;
    private gridCore;
    private focusedCellPosition;
    private focusedHeaderPosition;
    private keyboardFocusActive;
    private init;
    registerGridCore(gridCore: GridCore): void;
    onColumnEverythingChanged(): void;
    isKeyboardFocus(): boolean;
    private activateMouseMode;
    private activateKeyboardMode;
    getFocusCellToUseAfterRefresh(): CellPosition;
    private getGridCellForDomElement;
    clearFocusedCell(): void;
    getFocusedCell(): CellPosition;
    setFocusedCell(rowIndex: number, colKey: string | Column, floating: string | undefined, forceBrowserFocus?: boolean): void;
    isCellFocused(cellPosition: CellPosition): boolean;
    isRowNodeFocused(rowNode: RowNode): boolean;
    isHeaderWrapperFocused(headerWrapper: AbstractHeaderWrapper): boolean;
    clearFocusedHeader(): void;
    getFocusedHeader(): HeaderPosition;
    setFocusedHeader(headerRowIndex: number, column: ColumnGroup | Column): void;
    focusHeaderPosition(headerPosition: HeaderPosition, direction?: 'Before' | 'After', fromTab?: boolean, allowUserOverride?: boolean, event?: KeyboardEvent): boolean;
    isAnyCellFocused(): boolean;
    isRowFocused(rowIndex: number, floating: string): boolean;
    findFocusableElements(rootNode: HTMLElement, exclude?: string, onlyUnmanaged?: boolean): HTMLElement[];
    focusInto(rootNode: HTMLElement, up?: boolean, onlyUnmanaged?: boolean): boolean;
    findNextFocusableElement(rootNode: HTMLElement, onlyManaged?: boolean, backwards?: boolean): HTMLElement;
    isFocusUnderManagedComponent(rootNode: HTMLElement): boolean;
    findTabbableParent(node: HTMLElement, limit?: number): HTMLElement;
    private onCellFocused;
    focusGridView(column?: Column, backwards?: boolean): boolean;
    focusNextGridCoreContainer(backwards: boolean): boolean;
}

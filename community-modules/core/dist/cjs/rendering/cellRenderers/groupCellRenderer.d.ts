// Type definitions for @ag-grid-community/core v24.1.0
// Project: http://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ag-grid/>
import { Component } from "../../widgets/component";
import { ICellRendererComp, ICellRendererFunc, ICellRendererParams } from "./iCellRenderer";
export interface GroupCellRendererParams extends ICellRendererParams {
    pinned: string;
    fullWidth: boolean;
    suppressPadding: boolean;
    suppressDoubleClickExpand: boolean;
    suppressEnterExpand: boolean;
    footerValueGetter: any;
    suppressCount: boolean;
    checkbox: any;
    innerRenderer?: {
        new (): ICellRendererComp;
    } | ICellRendererFunc | string;
    innerRendererFramework?: any;
    innerRendererParams?: any;
    scope: any;
    /** @deprecated */
    padding: number;
}
export declare class GroupCellRenderer extends Component implements ICellRendererComp {
    private static TEMPLATE;
    private gridOptionsWrapper;
    private expressionService;
    private valueFormatterService;
    private columnController;
    private userComponentFactory;
    private eExpanded;
    private eContracted;
    private eCheckbox;
    private eValue;
    private eChildCount;
    private params;
    private draggedFromHideOpenParents;
    private displayedGroup;
    private cellIsBlank;
    private indentClass;
    private innerCellRenderer;
    constructor();
    init(params: GroupCellRendererParams): void;
    private assignBlankValueToGroupFooterCell;
    private isEmbeddedRowMismatch;
    private setIndent;
    private setPaddingDeprecatedWay;
    private setupIndent;
    private addValueElement;
    private createFooterCell;
    private createGroupCell;
    private useInnerRenderer;
    private useFullWidth;
    private addChildCount;
    private updateChildCount;
    private createLeafCell;
    private isUserWantsSelected;
    private addCheckboxIfNeeded;
    private addExpandAndContract;
    private onRowNodeIsExpandableChanged;
    private onKeyDown;
    private setupDragOpenParents;
    onExpandClicked(mouseEvent: MouseEvent): void;
    onCellDblClicked(mouseEvent: MouseEvent): void;
    onExpandOrContract(): void;
    private isExpandable;
    private showExpandAndContractIcons;
    destroy(): void;
    refresh(): boolean;
}

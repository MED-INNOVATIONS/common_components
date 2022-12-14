// @import url("https://cdn.syncfusion.com/ej2/20.3.60/bootstrap4.css");

import React, { useEffect } from "react";
import { RichTextEditorComponent, Toolbar, Inject, Image, Link, HtmlEditor, Count, QuickToolbar, Table, PasteCleanup } from '@syncfusion/ej2-react-richtexteditor';
import { FileManager } from '@syncfusion/ej2-react-richtexteditor';
import _ from "lodash";

import { getLocaleByLanguage } from "./../../DateComponents/DateComponentsV2/SyncfusionUtils";
import { items, tableItems, imageItems } from "./HtmlEditorItems";

function HTMLEditor(props) {
    const { language = "En", enabled, disabled, value, onChange } = props;
    const isEnabled = enabled === false || disabled === true ? false : true;
    var rteObj;

    /*************************************************************************/
    /************************ STANDARD ***************************************/
    /*************************************************************************/
    useEffect(() => {
        try { document.getElementById("js-licensing").remove(); } catch (e) { }
    }, [])

    /*************************************************************************/
    /************************ RENDER ***************************************/
    /*************************************************************************/
    const quickToolbarSettings = {
        table: tableItems,
        image: imageItems
    };

    const toolbarSettings = {
        items: items
    };

    return (
        <RichTextEditorComponent
            id="toolsRTE"
            locale={getLocaleByLanguage(language)}
            ref={(richtexteditor) => { rteObj = richtexteditor; }}
            enabled={isEnabled}
            value={value}
            toolbarSettings={toolbarSettings}
            pasteCleanupSettings={{
                prompt: true,
                plainText: false,
                keepFormat: false
            }}
            insertImageSettings={{
                allowedTypes: [".png", ".png"],
                display: "inline",
                width: "auto",
                height: "auto",
                saveFormat: "Base64"
            }}
            quickToolbarSettings={quickToolbarSettings}
            showCharCount={true}
            change={(e) => {
                onChange(e.value)
            }}>
            <Inject services={[Toolbar, Image, Link, HtmlEditor, Count, QuickToolbar, Table, FileManager, PasteCleanup]} />
        </RichTextEditorComponent>
    );
}
export default HTMLEditor;
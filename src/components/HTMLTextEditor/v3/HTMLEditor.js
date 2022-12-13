import React, { useEffect } from "react";
import { RichTextEditorComponent, Toolbar, Inject, Image, Link, HtmlEditor, Count, QuickToolbar, Table, PasteCleanup } from '@syncfusion/ej2-react-richtexteditor';
import { FileManager } from '@syncfusion/ej2-react-richtexteditor';
import _ from "lodash";


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

    useEffect(() => {
        if (_.isEmpty(rteObj) === false) {
            // rteObj.localeObj.setLocale("de-DE");
            // rteObj.refresh();
            // setCulture("de-DE")
            // console.error("ffff", rteObj)
            // console.error("ffff", L10n)
        }
    }, [language])

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
            locale={'it'}
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
// ==UserScript==
// @name            DH2 close loot
// @author          unnecessary-axiom
// @namespace       https://github.com/unnecessary-axiom/
// @description     Auto close loot dialogs Diamondhunt 2
// @license         MIT License
// @version         0.1
// @match           https://*.diamondhunt.co/*
// @run-at          document-start
//
// ==/UserScript==

/* jshint esversion: 6 */
// Smitty's Date.toString override breaks some promise code that userscripts use to inject the script. So we have to set 
// @run-at          document-start
// and use to run after the rest of the js/page is loaded
document.addEventListener("DOMContentLoaded", function(event) { 
    'use strict';

    // Diamondhunt stores directly on the window scope
    const dh = window; 

    let timeout_handle = null;

    const _openLootBoxDialogue = dh.openLootBoxDialogue;
    //
    // we don't need any arguments, even though the orig function has them
    dh.openLootBoxDialogue = function(){

        window.clearTimeout(timeout_handle);
        timeout_handle = window.setTimeout(function(){
            $('#dialogue-loot').dialog("close");
        }, 5000);

        _openLootBoxDialogue.apply(this, arguments);
    };
});

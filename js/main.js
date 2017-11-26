"use strict";

console.log("main.js loaded");

const app = angular.module('WatchListApp', ['ngRoute', 'ui.bootstrap']);

$(function(){
    $("#sortable").sortable(),
    $("#sortable").disableSelection()
});
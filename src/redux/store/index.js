/*
! Store : 「state」を保存する
    ? (1) Store と「Reducer」を関連付ける
        * reduxモジュールのimport：CreateStore, combineReducers
        * Reducersのimport
        * 複数のReducerを{オブジェクト}にまとめる
        * combineReducersの引数に、{まとめたReducerオブジェクト}を入れてreturn
    ? (2) Redux (Store) と React を接続する
        * index.js(rootの一番上) で「Provider」をimport
        * --- import { Provider } from "react-redux";
        * React側に Store を作成(別の場所でも使うからexportしとく)
        * --- export const store = createStore();
        * Provider ラップの中のコンポーネントで connect関数(値の変更、参照)を使える
*/
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../counter/slices.js";

export const store = configureStore({
    reducer:{
        counter: counterReducer,
    },
})
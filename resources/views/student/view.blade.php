@extends('layouts.app')

@section('content')
    <div class="container">
        <div id="vue-app">
            <students-table-component :students="{{$students}}">

            </students-table-component>
        </div>
    </div>
@endsection

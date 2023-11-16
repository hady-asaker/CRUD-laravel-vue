<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::get('/example', function () {
    return view('example');
});

Route::group(['namespace'=>'App\Http\Controllers'], function (){
    Route::get('/add-student', 'StudentController@create')->name('add-student');
    Route::post('/save-student', 'StudentController@save');

    Route::get('/students', 'StudentController@All_Students');
    Route::post('/fetch-all-students', 'StudentController@Fetch_All_Students');

    Route::get('/edit-student/{id}', 'StudentController@edit_student');
    Route::get('/fetch-student-showById/{id}', 'StudentController@fetchStudentToEdit');
    Route::put('/update-student/{id}', 'StudentController@update_student');

    Route::get('/delete-student/{id}', 'StudentController@delete_student');

});


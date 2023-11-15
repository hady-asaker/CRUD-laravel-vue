<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;


class StudentController extends Controller
{
    public function create()
    {
        $data = [
            "scope" => "create"
        ];
        return view('student.form')->with($data);
    }

    public function save(Request $request)
    {
        return $request;
    }

    public function All_Students()
    {

    }
}

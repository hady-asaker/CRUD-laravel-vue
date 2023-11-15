<?php

namespace App\Http\Controllers;
use App\Models\Student;
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
        try {
            $student = new Student();
            $student->name = $request->name;
            $student->class = $request->class;
            $student->section = $request->section;
            $student->email = $request->email;
            $student->save();

            return response()->json([
                'message' => 'Student Saved Successfully'
            ]);
        } catch (\Exception $e) {
            // Log the exception for debugging
            \Log::error($e);

            return response()->json([
                'error' => 'An error occurred while saving the student'], 500);
        }
    }
    public function All_Students()
    {

    }
}

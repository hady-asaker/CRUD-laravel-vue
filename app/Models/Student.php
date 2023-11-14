<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    use HasFactory;

    protected $table = 'students';
    protected $fillabe = ['name', 'class', 'email', 'status'];
    protected $hidden = [];
    public $timestamps = true;
}

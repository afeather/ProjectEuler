cmake_minimum_required(VERSION 3.14)

# set the project name
project(ProjectEuler)

# add the executables
file(GLOB PROBLEMS "problem*.cpp")
foreach(PROBLEM ${PROBLEMS})
	get_filename_component(EXECUTABLE ${PROBLEM} NAME_WLE)
	add_executable(${EXECUTABLE} ${PROBLEM})
endforeach()


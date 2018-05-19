cmake_minimum_required(VERSION 3.10 FATAL_ERROR)
project(swift2ts)
set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED on)
list(APPEND CMAKE_MODULE_PATH ${PROJECT_SOURCE_DIR}/cmake)
set(GIT_SUBMODULE_VERSION_antlr4 "4.7.1")
include(submodules)
set(ANTLR4CPP_EXTERNAL_TAG "4.7.1")
include(ExternalAntlr4Cpp)
include_directories(${ANTLR4CPP_INCLUDE_DIRS})
link_directories(${ANTLR4CPP_LIBS})
message(STATUS "Found antlr4cpp libs: ${ANTLR4CPP_LIBS} and includes: ${ANTLR4CPP_INCLUDE_DIRS}")
antlr4cpp_process_grammar(
    swift2ts
    swift2ts
    ${PROJECT_SOURCE_DIR}/grammars/SwiftLexer.g4
    ${PROJECT_SOURCE_DIR}/grammars/SwiftParser.g4
)
include_directories(${antlr4cpp_include_dirs_swift2ts})
include_directories(${PROJECT_SOURCE_DIR}/src)
set(antlr4cpp_shared_lib "${ANTLR4CPP_LIBS}/antlr4-runtime${CMAKE_SHARED_LIBRARY_SUFFIX}")
file(GLOB_RECURSE src ${PROJECT_SOURCE_DIR}/src/*.cpp)
add_executable(swift2ts ${src} ${antlr4cpp_src_files_swift2ts})
add_dependencies(swift2ts antlr4cpp antlr4cpp_generation_swift2ts)
target_link_libraries(swift2ts antlr4-runtime)
target_compile_options(
    swift2ts
    PUBLIC $<IF:$<CXX_COMPILER_ID:MSVC>,/wd4251,-Wno-overloaded-virtual>
           $<$<CXX_COMPILER_ID:MSVC>:/wd4996>
)
add_custom_command(
    TARGET swift2ts
    POST_BUILD
    COMMAND ${CMAKE_COMMAND} -E copy_if_different ${antlr4cpp_shared_lib} $<TARGET_FILE_DIR:swift2ts>
)
add_executable(grammar_test ${PROJECT_SOURCE_DIR}/test/main.cpp ${antlr4cpp_src_files_swift2ts})
add_dependencies(grammar_test antlr4cpp antlr4cpp_generation_swift2ts)
target_link_libraries(grammar_test antlr4-runtime)
target_compile_options(
    grammar_test
    PUBLIC $<IF:$<CXX_COMPILER_ID:MSVC>,/wd4251,-Wno-overloaded-virtual>
           $<$<CXX_COMPILER_ID:MSVC>:/wd4996>
)
add_custom_command(
    TARGET grammar_test
    POST_BUILD
    COMMAND ${CMAKE_COMMAND} -E copy_if_different ${antlr4cpp_shared_lib} $<TARGET_FILE_DIR:grammar_test>
)

if(EXISTS "${PROJECT_SOURCE_DIR}/.gitmodules")
    message(STATUS "Updating submodules to their latest/fixed versions")
    message(STATUS "(this can take a while, please be patient)")
    set(GIT_SUBMODULES_DIRECTORY third_party)
    set(GIT_SUBMODULES_REGEX "\\[submodule \"${GIT_SUBMODULES_DIRECTORY}/([^\r\n/]+)\"\\]")
    file(STRINGS ${PROJECT_SOURCE_DIR}/.gitmodules GIT_SUBMODULES REGEX ${GIT_SUBMODULES_REGEX})
    if(${GIT_SUBMODULES_CHECKOUT_QUIET})
        execute_process(
            COMMAND           git submodule update --init --recursive
            WORKING_DIRECTORY ${PROJECT_SOURCE_DIR}
            OUTPUT_QUIET
            ERROR_QUIET
        )
    else()
        execute_process(
            COMMAND           git submodule update --init --recursive
            WORKING_DIRECTORY ${PROJECT_SOURCE_DIR}
        )
    endif()
    foreach(GIT_SUBMODULE ${GIT_SUBMODULES})
        string(REGEX REPLACE ${GIT_SUBMODULES_REGEX} "\\1" GIT_SUBMODULE "${GIT_SUBMODULE}")
        if("${GIT_SUBMODULE_VERSION_${GIT_SUBMODULE}}" STREQUAL "")
            message(STATUS "no specific version given for submodule ${GIT_SUBMODULE}, checking out master")
            set(GIT_SUBMODULE_VERSION_${GIT_SUBMODULE} "master")
        endif()
        if(${GIT_SUBMODULES_CHECKOUT_QUIET})
            execute_process(
                COMMAND           git checkout ${GIT_SUBMODULE_VERSION_${GIT_SUBMODULE}}
                WORKING_DIRECTORY ${PROJECT_SOURCE_DIR}/${GIT_SUBMODULES_DIRECTORY}/${GIT_SUBMODULE}
                OUTPUT_QUIET
                ERROR_QUIET
            )
        else()
            message(STATUS "checking out ${GIT_SUBMODULE}'s commit/tag ${GIT_SUBMODULE_VERSION_${GIT_SUBMODULE}}")
            execute_process(
                COMMAND           git checkout ${GIT_SUBMODULE_VERSION_${GIT_SUBMODULE}}
                WORKING_DIRECTORY ${PROJECT_SOURCE_DIR}/${GIT_SUBMODULES_DIRECTORY}/${GIT_SUBMODULE}
            )
        endif()
    endforeach()
endif()

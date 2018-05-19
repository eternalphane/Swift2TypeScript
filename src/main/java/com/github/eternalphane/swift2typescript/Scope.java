package com.github.eternalphane.swift2typescript;

import java.util.Map;

class Scope {
    private Map<String, String> _vars;
    private Map<String, Scope> _inner;

    Scope outer = null;

    void addVar(String name, String type) {
        this._vars.put(name, type);
    }

    void addScope(String name, Scope scope) {
        scope.outer = this;
        this._inner.put(name, scope);
    }

    class Function extends Scope {
        String returnType;
        String[] paramTypes;
    }

    class Closure extends Scope {
        String returnType;
        String[] paramTypes;
    }

    class Enum extends Scope {
        //
    }

    class Class extends Scope {
        Map<String, String> staticVars;
        Map<String, Scope> staticInner;
    }

    class Struct extends Scope {
        Map<String, String> staticVars;
        Map<String, Scope> staticInner;
    }

    class Extension extends Scope {
        //
    }

    class Protocol extends Scope {
        //
    }
}

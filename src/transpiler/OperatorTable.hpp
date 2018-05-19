#pragma once
#include <memory>
#include <set>
#include <unordered_map>

namespace swift2ts
{

class OperatorTable
{
  public:
    int compare(const std::string &op1, const std::string &op2)
    {
        auto pg1 = _pgs[_ops[op1]], pg2 = _pgs[_ops[op2]];
        if (pg1 == pg2)
            return pg1->assoc ? -1 : 0;
        if (pg1->_ht.find(pg2) != pg1->_ht.end())
            return 1;
        if (pg1->_lt.find(pg2) != pg1->_lt.end())
            return -1;
        return INT_MAX;
    }

    void newOperator(const std::string &name, const std::string &pg)
    {
        if (_ops.find(name) != _ops.end())
            throw; // TODO
        _ops[name] = pg;
    }

    void newPrecedenceGroup(const std::string &name, bool assign, bool assoc, std::vector<std::string> ht, std::vector<std::string> lt)
    {
        if (_pgs.find(name) != _pgs.end())
            throw; // TODO
        auto pg = std::make_shared<PG>();
        pg->assign = assign;
        pg->assoc = assoc;
        for (auto &lpg : ht)
        {
            auto it = _pgs.find(lpg);
            if (it == _pgs.end())
                throw; // TODO
            it->second->lt(pg);
        }
        for (auto &hpg : lt)
        {
            auto it = _pgs.find(hpg);
            if (it == _pgs.end())
                throw; // TODO
            it->second->ht(pg);
        }
        _pgs[name] = pg;
    }

  private:
    struct PG : std::enable_shared_from_this<PG>
    {
        bool assign;
        bool assoc = 0; // 0 <--> left, 1 <--> right
        std::set<std::shared_ptr<PG>> _ht;
        std::set<std::shared_ptr<PG>> _lt;

        void ht(std::shared_ptr<PG> pg)
        {
            _ht.insert(pg);
            pg->_lt.insert(shared_from_this());
            for (auto &hpg : _lt)
                hpg->ht(pg);
        }

        void lt(std::shared_ptr<PG> pg)
        {
            _lt.insert(pg);
            pg->_ht.insert(shared_from_this());
            for (auto &lpg : _ht)
                lpg->lt(pg);
        }
    };

    std::unordered_map<std::string, std::string> _ops;
    std::unordered_map<std::string, std::shared_ptr<PG>> _pgs;
};

} // namespace swift2ts

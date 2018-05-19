#include "experimental_feature.hpp"
#include <array>
#include <vector>
#include <deque>
#include <forward_list>
#include <list>
#include <set>
#include <map>
#include <unordered_set>
#include <unordered_map>
#include <stack>
#include <queue>

namespace swift2ts
{

namespace util
{



template<class T>
struct container {};
template<class T, size_t N>
struct container<std::array<T, N>>
{
    using container_type = std::array<T, N>;
    using value_type = typename container_type::value_type;
    using size_type = typename container_type::size_type;
    using reference = typename container_type::reference;
    using const_reference = typename container_type::const_reference;
};
template<class T, class Allocator>
struct container<std::vector<T, Allocator>>
{
    using container_type = std::vector<T, Allocator>;
    using value_type = typename container_type::value_type;
    using size_type = typename container_type::size_type;
    using reference = typename container_type::reference;
    using const_reference = typename container_type::const_reference;
};
template<class T, class Allocator>
struct container<std::deque<T, Allocator>>
{
    using container_type = std::deque<T, Allocator>;
    using value_type = typename container_type::value_type;
    using size_type = typename container_type::size_type;
    using reference = typename container_type::reference;
    using const_reference = typename container_type::const_reference;
};
template<class T, class Allocator>
struct container<std::forward_list<T, Allocator>>
{
    using container_type = std::forward_list<T, Allocator>;
    using value_type = typename container_type::value_type;
    using size_type = typename container_type::size_type;
    using reference = typename container_type::reference;
    using const_reference = typename container_type::const_reference;
};
template<class T, class Allocator>
struct container<std::list<T, Allocator>>
{
    using container_type = std::list<T, Allocator>;
    using value_type = typename container_type::value_type;
    using size_type = typename container_type::size_type;
    using reference = typename container_type::reference;
    using const_reference = typename container_type::const_reference;
};
template<class Key, class Compare, class Allocator>
struct container<std::set<Key, Compare, Allocator>>
{
    using container_type = std::set<Key, Compare, Allocator>;
    using key_type = container_type::key_type;
    using value_type = typename container_type::value_type;
    using size_type = typename container_type::size_type;
    using reference = typename container_type::reference;
    using const_reference = typename container_type::const_reference;
};
template<class Key, class Compare, class Allocator>
struct container<std::multiset<Key, Compare, Allocator>>
{
    using container_type = std::multiset<Key, Compare, Allocator>;
    using key_type = container_type::key_type;
    using value_type = typename container_type::value_type;
    using size_type = typename container_type::size_type;
    using reference = typename container_type::reference;
    using const_reference = typename container_type::const_reference;
};
template<class Key, class T, class Compare, class Allocator>
struct container<std::map<Key, T, Compare, Allocator>>
{
    using container_type = std::map<Key, T, Compare, Allocator>;
    using key_type = container_type::key_type;
    using mapped_type = container_type::mapped_type;
    using value_type = typename container_type::value_type;
    using size_type = typename container_type::size_type;
    using reference = typename container_type::reference;
    using const_reference = typename container_type::const_reference;
};
template<class Key, class T, class Compare, class Allocator>
struct container<std::multimap<Key, T, Compare, Allocator>>
{
    using container_type = std::multimap<Key, T, Compare, Allocator>;
    using key_type = container_type::key_type;
    using mapped_type = container_type::mapped_type;
    using value_type = typename container_type::value_type;
    using size_type = typename container_type::size_type;
    using reference = typename container_type::reference;
    using const_reference = typename container_type::const_reference;
};
template<class Key, class Hash, class KeyEqual, class Allocator>
struct container<std::unordered_set<Key, Hash, KeyEqual, Allocator>>
{
    using container_type = std::unordered_set<Key, Hash, KeyEqual, Allocator>;
    using key_type = container_type::key_type;
    using value_type = typename container_type::value_type;
    using size_type = typename container_type::size_type;
    using reference = typename container_type::reference;
    using const_reference = typename container_type::const_reference;
};
template<class Key, class Hash, class KeyEqual, class Allocator>
struct container<
    std::unordered_multiset<Key, Hash, KeyEqual, Allocator>
>
{
    using container_type = std::unordered_multiset<Key, Hash, KeyEqual, Allocator>;
    using key_type = container_type::key_type;
    using value_type = typename container_type::value_type;
    using size_type = typename container_type::size_type;
    using reference = typename container_type::reference;
    using const_reference = typename container_type::const_reference;
};
template<class Key, class T, class Hash, class KeyEqual, class Allocator>
struct container<std::unordered_map<Key, T, Hash, KeyEqual, Allocator>>
{
    using container_type = std::unordered_map<Key, T, Hash, KeyEqual, Allocator>;
    using key_type = container_type::key_type;
    using mapped_type = container_type::mapped_type;
    using value_type = typename container_type::value_type;
    using size_type = typename container_type::size_type;
    using reference = typename container_type::reference;
    using const_reference = typename container_type::const_reference;
};
template<class Key, class T, class Hash, class KeyEqual, class Allocator>
struct container<
    std::unordered_multimap<Key, T, Hash, KeyEqual, Allocator>
>
{
    using container_type = std::unordered_multimap<Key, T, Hash, KeyEqual, Allocator>;
    using key_type = container_type::key_type;
    using mapped_type = container_type::mapped_type;
    using value_type = typename container_type::value_type;
    using size_type = typename container_type::size_type;
    using reference = typename container_type::reference;
    using const_reference = typename container_type::const_reference;
};
template<class T, class Container>
struct container<std::stack<T, Container>>
{
    using container_type = std::stack<T, Container>;
    using value_type = typename container_type::value_type;
    using size_type = typename container_type::size_type;
    using reference = typename container_type::reference;
    using const_reference = typename container_type::const_reference;
};
template<class T, class Container>
struct container<std::queue<T, Container>>
{
    using container_type = std::queue<T, Container>;
    using value_type = typename container_type::value_type;
    using size_type = typename container_type::size_type;
    using reference = typename container_type::reference;
    using const_reference = typename container_type::const_reference;
};
template<class T, class Container, class Compare>
struct container<std::priority_queue<T, Container, Compare>>
{
    using container_type = std::priority_queue<T, Container, Compare>;
    using value_type = typename container_type::value_type;
    using size_type = typename container_type::size_type;
    using reference = typename container_type::reference;
    using const_reference = typename container_type::const_reference;
};

template<class, class = std::void_t<>>
struct is_stl_container : std::false_type {};
template<class T>
struct is_stl_container<T, std::void_t<typename container<T>::size_type>> : std::true_type {};

template<class T>
inline constexpr bool is_stl_container_v = is_stl_container<T>::value;

} // namespace util

} // namespace swift2ts

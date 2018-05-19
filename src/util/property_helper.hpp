#include <memory>
#include <type_traits>

namespace swift2ts
{

namespace util
{

namespace detail
{

template<class>
struct is_smart_ptr_helper : std::false_type {};
template<class T>
struct is_smart_ptr_helper<std::shared_ptr<T>> : std::true_type {};
template<class T>
struct is_smart_ptr_helper<std::weak_ptr<T>> : std::true_type {};
template<class T, class Deleter>
struct is_smart_ptr_helper<std::unique_ptr<T, Deleter>> : std::true_type {};

} // namespace detail

template<class T>
struct is_smart_ptr : detail::is_smart_ptr_helper<std::remove_cv_t<T>> {};

template<class T>
inline constexpr bool is_smart_ptr_v = is_smart_ptr<T>::value;

template<class T, class = void>
struct remove_smart_ptr { using type = T; };
template<class T>
struct remove_smart_ptr<T, std::enable_if_t<is_smart_ptr_v<T>>>
{
    using type = std::remove_cv_t<typename T::element_type>;
};

template<class T>
using remove_smart_ptr_t = typename remove_smart_ptr<T>::type;

template<class T, class Owner = void>
struct property
{
    using value_type = T;
    using reference = remove_smart_ptr_t<std::remove_pointer_t<value_type>>&;
    using const_reference = const remove_smart_ptr_t<std::remove_pointer_t<value_type>>&;

  protected:
    T _val;

  public:
    property() {}
    template<class U>
    property(U &&val) : _val(std::forward<U>(val)) {}
    reference operator()()
    {
        return const_cast<reference>(
            const_cast<const property<value_type, Owner>*>(this)->operator()()
        );
    }
    template<
        int N = 0,
        std::enable_if_t<N == N && std::is_same_v<reference, value_type&>, int> = 0>
    const_reference operator()() const { return _val; }
    template<
        int N = 0,
        std::enable_if_t<N == N && !std::is_same_v<reference, value_type&>, int> = 0>
    const_reference operator()() const { return *_val; }
    template<class U>
    value_type& operator=(U &&val) { return this->_val = std::forward<U>(val); }

    friend Owner;
};

} // namespace util

} // namespace swift2ts

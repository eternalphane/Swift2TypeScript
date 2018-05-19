#include <locale>
#include <string_view>
#include <vector>

namespace swift2ts
{

namespace util
{

std::wstring_convert<std::codecvt<std::int32_t, char, std::mbstate_t>, std::int32_t> _cvt32;

std::vector<std::string_view> split(std::string_view str, std::string_view sep)
{
    std::vector<std::string_view> result;
    size_t len = sep.size();
    for (size_t i = 0, j = 0; j != std::string_view::npos; i = j + len)
    {
        j = str.find(sep, i);
        result.push_back(str.substr(i, j - i));
    }
    return result;
}

std::u32string to_u32(std::string_view from)
{
#if defined(_MSC_VER) && _MSC_VER >= 1900 && _MSC_VER < 2000
    auto i = _cvt32.from_bytes(from.data(), from.data() + from.size());
    std::u32string s = reinterpret_cast<char32_t*>(i.data());
#else
    std::u32string s = _cvt32.from_bytes(from.data(), from.data() + from.size());
#endif
    return s;
}

std::string to_u8(std::u32string_view from)
{
#if defined(_MSC_VER) && _MSC_VER >= 1900 && _MSC_VER < 2000
    auto p = reinterpret_cast<const int32_t*>(from.data());
    std::string s = _cvt32.to_bytes(p, p + from.size());
#else
    std::string s = _cvt32.to_bytes(p, p + from.size());
#endif
    return s;
}

} // namespace util

} // namespace swift2ts

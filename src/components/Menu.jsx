import React, { useState } from 'react'
import { Download, Coffee, UtensilsCrossed, Sandwich, Pizza, Soup, Salad, IceCream, Cookie } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations'
import './Menu.css'
import menuPDF from '../assets/menu/6 Point Menu (1) (1)_compressed.pdf'

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('breakfast')
  const { t } = useLanguage()

  const menuData = {
    breakfast: {
      icon: <Coffee size={24} />,
      title: 'Breakfast الفطار',
      items: [
        { name: 'Cheese Omelet تشيز اومليت', price: '95 EGP', desc: 'بيض أومليت مغطي بصوص الجبنه مع بطاطس ودجز والخضراوات الطازجه وعيش التوست' },
        { name: 'Spanish Omelet اسبانش اومليت', price: '105 EGP', desc: 'بيض أومليت مع مكس خضراوات والجبنه مع بطاطس ودجز وعيش التوست' },
        { name: '6Point Breakfast', price: '155 EGP', desc: 'شرائح سموكد بيف مع التركي المدخن والجبنه الشيدر والخس مع البيض المقلي و بطاطس ودجز' },
        { name: 'Healthy Breakfast', price: '120 EGP', desc: 'بيض عيون مع طماطم شيري والمشروم الفريش والزبادي والعسل الأبيض وعيش التوست' },
        { name: 'Omelet Roll Beef Bacon', price: '125 EGP', desc: 'بيض أومليت مع بيف بيكون والجبنه الشيدر والمشروم الفريش مع الخضراوات' },
        { name: 'Omelet Roll Smoked Turkey', price: '125 EGP', desc: 'بيض أومليت مع التركي المدخن والجبنه الشيدر والمشروم الفريش' },
        { name: 'Omelet Roll Hot Dog', price: '120 EGP', desc: 'بيض اومليت مع الهوت دوج والجبنه الشيدر والجبنه الرومي والمشروم الفريش' },
        { name: 'Omelet Pastrami اومليت بسطرمة', price: '120 EGP', desc: 'بيض أومليت مع البسطرمه وميكس خضراوات مع بطاطس ودجز' },
        { name: 'Smoked Beef Club Sandwich', price: '135 EGP', desc: 'بيض مقلي مع شرائح سموكد بيف والخس والجبنه الشيدر مع بطاطس و كلوسلو' },
        { name: 'Smoked Turkey Club Sandwich', price: '125 EGP', desc: 'بيض مقلي مع شرائح التركي المدخن والجبنه الشيدر مع بطاطس و كلوسلو' }
      ]
    },
    appetizers: {
      icon: <UtensilsCrossed size={24} />,
      title: 'Appetizers مقبلات',
      items: [
        { name: 'Spring Roll اسبرينج روول', price: '75 EGP', desc: 'صوابع من ورق الاسبرنج مع ميكس من الجبنه الموزاريلا والتركي المدخن' },
        { name: 'French Fries فرينش فرايز', price: '39 EGP', desc: 'بطاطس مقلية' },
        { name: 'Cheese Fries تشيز فرايز', price: '79 EGP', desc: 'البطاطس المقليه مع صوص الجبنه المميز' },
        { name: 'Fried Mozzarella فرايد موزريلا', price: '95 EGP', desc: 'صوابع من الجبنه الموزاريلا المقليه' },
        { name: 'Chicken Sweet Chili', price: '125 EGP', desc: 'قطع من الدجاج الكرسبي مع ميكس صوص سويت تشيلي' },
        { name: 'Chicken Strips تشيكن استربس', price: '135 EGP', desc: 'قطع من الدجاج الكريسبي مع الصوص المميز' },
        { name: 'Chicken Nachos', price: '145 EGP', desc: 'قطع من العيش الناتشوز مع الميكس تشيز' },
        { name: 'Cheese Nachos تشيز ناتشوز', price: '105 EGP', desc: 'قطع من الدجاج الكرسبي مع الصوص المميز' },
        { name: 'Smoked Strips سموكد استربس', price: '195 EGP', desc: 'قطع من الدجاج الكرسبي مع البيف المدخن وصوص الجبنة المميز' },
        { name: 'Fries Tex Mix', price: '185 EGP', desc: 'البطاطس المقليه مع صوص البولونيز وصوص الجبنه المميز والهاليبينو' },
        { name: '6Point Combo كومبو', price: '245 EGP', desc: 'ميكس من الاسبرنج رول وقطع الدجاج الكرسبي والجبنه الموزاريلا المقليه و فرايد مشروم' }
      ]
    },
    salads: {
      icon: <Salad size={24} />,
      title: 'Salads السلاد',
      items: [
        { name: 'Demari Salad ديماري سلاد', price: '175 EGP', desc: 'صدور الدجاج الجريلد مع فلفل الوان وخس كابوتشا والسويت كورن مع دريسينج الشيف الخاص' },
        { name: 'Chicken Ranch Salad', price: '125 EGP', desc: 'صدور الدجاج الجريلد مع ميكس خضراوات وصوص الرانش المميز' },
        { name: 'Chicken Crispy Salad', price: '145 EGP', desc: 'قطع من الدجاج الكرسبي مع ميكس خضراوات وصوص الكوكتيل المميز' },
        { name: 'Chicken Caesar Salad', price: '159 EGP', desc: 'صدور الدجاج الجريلد مع الخس وعيش الكريتون وصوص السيزر المميز' },
        { name: 'Six Point Salad', price: '135 EGP', desc: 'قطع من العنب والتفاح وفلفل الوان مع عين الجمل والجرجير والدريسينج الشيف الخاص' },
        { name: 'Greek Salad جريك سلاد', price: '85 EGP', desc: 'قطع من الجبن الفيتا مع ميكس الخضراوات والزعتر' },
        { name: 'Rocca Salad روكا سلاد', price: '135 EGP', desc: 'الجرجير الفريش مع قطع الطماطم والرمان الفريش مع عين الجمل والدريسينج الشيف الخاص' },
        { name: 'Fattoush Salad فتوش سلاد', price: '185 EGP', desc: 'ميكس الخضراوات وعيش اللبناني المحمص مع دبس الرمان' }
      ]
    },
    soup: {
      icon: <Soup size={24} />,
      title: 'Soup الشوربة',
      items: [
        { name: 'Creamy Shrimp Soup', price: '155 EGP', desc: 'شوربة كريمي شريمب' },
        { name: 'Creamy Chicken Mushroom', price: '115 EGP', desc: 'شوربة كريمي تشيكن مشروم' },
        { name: 'Onion Soup شوربة اونيون', price: '85 EGP', desc: 'شوربة البصل' },
        { name: 'Creamy Mushroom', price: '95 EGP', desc: 'شوربة كريمي مشروم' },
        { name: 'Creamy Chicken', price: '105 EGP', desc: 'شوربة كريمي تشيكن' }
      ]
    },
    sandwiches: {
      icon: <Sandwich size={24} />,
      title: 'Sandwiches الساندوتشات',
      items: [
        { name: 'Grilled Chicken تشيكن جريلد', price: '135 EGP', desc: 'صدور الدجاج المشوي علي الجريلد مع الخس و الطماطم و صوص الشيف الخاص' },
        { name: 'Philadelphia Beef', price: '195 EGP', desc: 'قطع من اللحم البقري الطازج مع المشروم الفريش والفلفل الالوان والجبنه الموزاريلا' },
        { name: 'Chicken Tandoori', price: '145 EGP', desc: 'صدور الدجاج المشوي مع صوص التندوري المميز' },
        { name: 'Cordon Bleu كوردن بلو', price: '185 EGP', desc: 'صدور الدجاج المحشوه بيكون مدخن والجبنه الشيدر مع الجبنه الموزاريلا' },
        { name: 'Crispy Smoked Turkey', price: '170 EGP', desc: 'قطع من الدجاج الكرسبي والتركي المدخن مع الخس والطماطم والجبنه الموزاريلا' },
        { name: 'Chicken Crispy', price: '155 EGP', desc: 'قطع من الدجاج الكرسبي مع الخس والطماطم والجبنه الموزاريلا' },
        { name: 'Chicken Crispy Tortilla', price: '159 EGP', desc: 'قطع من الدجاج الكرسبي والخس والطماطم مع الصوص المميز الملفوف في العيش المكسيكي' },
        { name: 'Chicken Pane تشيكن بانية', price: '165 EGP', desc: 'قطع من الدجاج المقلي والخس والطماطم مع الصوص المميز' },
        { name: 'Chicken Fajita Wrap', price: '165 EGP', desc: 'قطع من الدجاج المقلي مع ميكس جبن علي الطريقه المكسيكيه' },
        { name: 'Beef Fajita Wrap', price: '205 EGP', desc: 'قطع من اللحم البقري مع ميكس جبن علي الطريقه المكسيكيه' }
      ]
    },
    burgers: {
      icon: <UtensilsCrossed size={24} />,
      title: 'Burgers برجر',
      items: [
        { name: 'Tokyo Burger طوكيو برجر', price: '195 EGP', desc: 'قطع من اللحمه البقري المشوي مع الخس والطماطم والجبنه الشيدر وصوص سويت شيلي' },
        { name: '6Point Burger', price: '220 EGP', desc: 'قطع من اللحم البقري المشوي مع الخس والطماطم والبصل المكرمل وصوص الجبنه والبيف المدخن' },
        { name: 'Texas Bacon Burger', price: '215 EGP', desc: 'قطع من اللحم البقري المشوي مع الخس والطماطم والبيكون المدخن وصوص التكساس والجبنه شيدر الاحمر' },
        { name: 'Classic Burger كلاسيك برجر', price: '185 EGP', desc: 'قطع من اللحم البقري المشوي مع الخس والطماطم والصوص المميز' },
        { name: 'Burger Melt Cheese', price: '205 EGP', desc: 'قطع من اللحم البقري المشوي مع الخس والطماطم وصوص الجبنه المميز' },
        { name: 'Italian Burger ايطاليان برجر', price: '195 EGP', desc: 'قطع من اللحم البقري المشوي مع الفلفل الالوان والمشروم الفريش والجبنه الموزاريلا' },
        { name: 'Mushroom Burger مشروم برجر', price: '199 EGP', desc: 'قطع من اللحم البقري المشوي مع صوص المشروم' },
        { name: 'Mozzarella Sticks Burger', price: '225 EGP', desc: 'قطع من اللحم البقري المشوي مع صوابع الموتزاريلا المقليه' }
      ]
    },
    pasta: {
      icon: <UtensilsCrossed size={24} />,
      title: 'Pasta باستا',
      items: [
        { name: 'Chicken Alfredo باستا تشيكن الفريدو', price: '180 EGP', desc: 'قطع الدجاج الجريلد مع المشروم والفلفل الالوان والجبنه البارميزان' },
        { name: 'Cheesy Chicken باستا تشيزي تشيكن', price: '225 EGP', desc: 'قطع الدجاج الجريلد مع الفلفل الالوان والجبنه البارميزان وصوص الجبنه المميز' },
        { name: 'Spaghetti Bolognese', price: '175 EGP', desc: 'صوص البلونيز الايطالي مع الفلفل الالوان وجبن البارميزان' },
        { name: 'Philadelphia Pasta', price: '265 EGP', desc: 'قطع من اللحم البقري مع صوص الكريمه والمشروم الفريش والفلفل الالوان وجبن البارميزان' },
        { name: 'Fettuccine Shrimp', price: '320 EGP', desc: 'قطع من الجمبري الطازج مع صوص الكريمه والفلفل الالوان وجبن البارميزان' },
        { name: '6Point Pasta', price: '295 EGP', desc: 'قطع من صدور الدجاج المشوي مع الجمبري وصوص الكريمه والريحان والفلفل الالوان وجبن البارميزان' },
        { name: 'Pasta Negresco', price: '195 EGP', desc: 'قطع الدجاج مع صوص الكريمه والمشروم الفريش والجبن الموزاريلا' },
        { name: 'Mac and Cheese Chicken', price: '205 EGP', desc: 'صدور الدجاج الجريلد مع مكرونه هلاليه وصوص الجبنه المميز' },
        { name: 'Cordon Bleu Pasta', price: '230 EGP', desc: 'صدور الدجاج المحشوه بيكون مدخن والجبنه الشيدر مع صوص الجبنه المميز' },
        { name: 'Grilled Chicken Pasta', price: '180 EGP', desc: 'قطع من الدجاج الجريلد مع صوص الكريمه والفلفل الالوان وجبن البارميزان' },
        { name: 'Crispy Chicken Pasta', price: '195 EGP', desc: 'قطع من الدجاج الكرسبي مع صوص الكريمه والفلفل الالوان وجبن البارميزان' },
        { name: 'Chicken Noodles', price: '165 EGP', desc: 'قطع من الدجاج مع مكرونه فيتوتشيني مع جزر وكوسه وفلفل الوان والصويا صوص مع السمسم' }
      ]
    },
    pizza: {
      icon: <Pizza size={24} />,
      title: 'Pizza البيتزا',
      items: [
        { name: 'Margherita بيتزا مارجريتا', price: '115 EGP', desc: 'صوص البيتزا المميز مع الجبنه الموزاريلا' },
        { name: 'Shrimp Pizza بيتزا شريمب', price: '285 EGP', desc: 'صوص البيتزا المميز مع الجمبري الفريش والفلفل الالوان والجبنه الموزاريلا' },
        { name: 'Super Supreme بيتزا سوبر سوبريم', price: '225 EGP', desc: 'شرائح من السلامي المدخن واللحم المفروم مع السجق والفلفل الالوان والجبنه الموزاريلا' },
        { name: 'Chicken BBQ بيتزا تشيكن باربيكيو', price: '180 EGP', desc: 'قطع من الدجاج المشوي مع صوص الباربكيو والفلفل الالوان والجبنه الموزاريلا' },
        { name: 'Chicken Texas', price: '190 EGP', desc: 'قطع من الدجاج المشوي مع صوص التيكساس والفلفل الالوان والجبنه الموزاريلا' },
        { name: 'Chicken Ranch بيتزا تشيكن رانش', price: '190 EGP', desc: 'قطع من الدجاج المشوي مع صوص الرانش والفلفل الالوان والجبنه الموزاريلا' },
        { name: 'Country Chicken Ranch', price: '210 EGP', desc: 'قطع من الدجاج الكرسبي مع الفلفل الالوان وصوص الرانش المميز' },
        { name: 'Sausage Pizza بيتزا سجق', price: '189 EGP', desc: 'قطع من السجق البلدي المشوي مع الفلفل الالوان والجبنه الموزاريلا' },
        { name: 'Chicken Sweet Chili Pizza', price: '180 EGP', desc: 'قطع من الدجاج المشوي مع صوص سويت تشيلي والفلفل الالوان والجبنه الموزاريلا' },
        { name: 'Quattro Formaggio', price: '189 EGP', desc: 'ميكس من الجبن ريكفورد شيدر أحمر رومي موزاريلا مع فلفل الالوان' },
        { name: 'Pepperoni Pizza بيبروني', price: '165 EGP', desc: 'شرائح من قطع الببروني مع فلفل الوان والجبنه الموزاريلا' },
        { name: 'Hot Dog Pizza هوت دوج', price: '150 EGP', desc: 'شرائح من الهوت دوج المدخن مع الفلفل الالوان والجبنه الموزاريلا' }
      ]
    },
    chicken: {
      icon: <UtensilsCrossed size={24} />,
      title: 'Chicken تشيكن',
      items: [
        { name: 'Grilled Chicken تشيكن جريلد', price: '265 EGP', desc: 'صدور الدجاج المشوي' },
        { name: 'Cordon Bleu كوردن بلو', price: '340 EGP', desc: 'صدور الدجاج المحشوه بيكون مدخن وميكس تشيز' },
        { name: 'Country Chicken Melt Cheese', price: '320 EGP', desc: 'صدور الدجاج الكرسبي المغطاه ميلت تشيز' },
        { name: 'Country Chicken كانتري تشيكن', price: '265 EGP', desc: 'صدور الدجاج الكرسبي' },
        { name: 'Chicken Milano تشيكن ميلانو', price: '330 EGP', desc: 'صدور الدجاج المشوي المغطاه بالتركي والجبن الموزاريلا وصوص الميلانو المميز' },
        { name: 'Chicken Sweet & Sour', price: '330 EGP', desc: 'صدور الدجاج مع صوص سويت اند ساور' },
        { name: 'Chicken Liver تشيكن ليفر', price: '280 EGP', desc: 'صدور الدجاج الجريلد مع قطع الكبده المميزه' },
        { name: 'Chicken & Shrimp', price: '375 EGP', desc: 'صدور الدجاج الجريلد مع الجمبري الطازج' },
        { name: 'Chicken Tandoori تندوري', price: '305 EGP', desc: 'صدور الدجاج مع صوص التندوري المميز' },
        { name: 'Chicken Butter Sauce', price: '285 EGP', desc: 'صدور الدجاج مع صوص الزبدة المميز' },
        { name: 'Grilled & Country Chicken', price: '270 EGP', desc: 'قطعه دجاج جريلد + قطعه دجاج كرسبي' },
        { name: 'Chicken Mushroom مشروم', price: '279 EGP', desc: 'صدور الدجاج الجريلد مع صوص المشروم المميز' },
        { name: 'Chicken Smoked BBQ', price: '299 EGP', desc: 'صدور الدجاج الجريلد مع سموكد بيف وصوص الباربيكيو' },
        { name: 'Chicken Smoked Mushroom Cream', price: '320 EGP', desc: 'صدور الدجاج الجريلد مع المشروم الفريش والسموكد بيف وصوص الكريمه المميز' },
        { name: 'Chicken Butter Mushroom', price: '295 EGP', desc: 'صدور الدجاج الجريلد مع باتر مشروم صوص' }
      ]
    },
    beef: {
      icon: <UtensilsCrossed size={24} />,
      title: 'Beef بيف',
      items: [
        { name: 'Beef Fillet بيف فيلية', price: '420 EGP', desc: 'قطع من اللحم البقري الطازج المشوي على الجريل' },
        { name: 'Rib Eye ريب اي', price: '420 EGP', desc: 'قطع من اللحم البقري الطازج المشوي على الجريل' },
        { name: 'Beef Fillet Liver', price: '445 EGP', desc: 'قطع من اللحم البقري الطازج المشوي على الجريل مع صوص الليفر المميز' },
        { name: 'Beef Fillet & Shrimp', price: '495 EGP', desc: 'قطع من اللحم البقري الطازج المشوي على الجريل مع الشريمب' },
        { name: 'Beef Fillet Butter Mushroom', price: '460 EGP', desc: 'قطع من اللحم البقري الطازج المشوي على الجريل مع بتر صوص مشروم' },
        { name: 'Piccata Mushroom بيكاتا مشروم', price: '440 EGP', desc: 'قطع من اللحم البقري الطازج مع صوص البيكاتا و المشروم' },
        { name: 'Beef Stroganoff', price: '420 EGP', desc: 'قطع من اللحم البقري الطازج مع المشروم الفريش والفلفل الالوان والبصل وصوص الديميجلاس بالكريمة' },
        { name: 'Beef Fillet Pepper Sauce', price: '430 EGP', desc: 'قطع من اللحم البقري الطازج مع صوص البيبر المميز' },
        { name: 'Tomahawk توماهوك', price: '600 EGP', desc: 'قطع غنية من اللحم البقري الطازج المشوي على الجريل' },
        { name: 'Grilled Beef & Chicken', price: '440 EGP', desc: 'قطع من اللحم البقري المشوى و قطع من الدجاج المشوى على الجريل' }
      ]
    },
    fajita: {
      icon: <UtensilsCrossed size={24} />,
      title: 'Fajita فاهيتا',
      items: [
        { name: 'Chicken Fajita تشيكن فاهيتا', price: '285 EGP', desc: 'صدور الدجاج الجريل على الطريقة المكسيكية' },
        { name: 'Beef Fajita بيف فاهيتا', price: '430 EGP', desc: 'قطع من اللحم البقري الطازج المشوى على الطريقة المكسيكية' },
        { name: 'Beef & Chicken Fajita', price: '460 EGP', desc: 'مكس من اللحوم المشوية وصدور الدجاج المشوي علي الطريقة المكسيكية' },
        { name: 'Melt Chicken Fajita', price: '315 EGP', desc: 'صدور الدجاج الجريل على الطريقة المكسيكية المغطاة بالصوص الجبنة المميز' },
        { name: 'Melt Beef Fajita', price: '460 EGP', desc: 'قطع من اللحم البقري المشوي على الطريقة المكسيكية المغطاة وصوص الجبن المميز' }
      ]
    },
    hotDrinks: {
      icon: <Coffee size={24} />,
      title: 'Hot Drinks مشروبات ساخنة',
      items: [
        { name: 'Red Tea شاي احمر', price: '40 EGP' },
        { name: 'Green Tea شاي اخضر', price: '40 EGP' },
        { name: 'Flavored Tea شاي فليفر', price: '40 EGP' },
        { name: 'Red Tea Pot براد شاي احمر', price: '65 EGP' },
        { name: 'Moroccan Tea Pot شاي مغربي', price: '65 EGP' },
        { name: 'Karak Tea شاي كرك', price: '50 EGP' },
        { name: 'Hot Orange Cider', price: '55 EGP' },
        { name: 'Sahlab with Nuts سحلب مكسرات', price: '65 EGP' },
        { name: 'Herbs اعشاب', price: '40 EGP' },
        { name: 'Cinnamon Milk قرفة حليب', price: '45 EGP' },
        { name: 'Nescafe نسكافيه', price: '60 EGP' },
        { name: 'Hot Cider', price: '55 EGP' },
        { name: 'Nescafe Nutella', price: '85 EGP' },
        { name: 'Clove Tea شاي قرنفل', price: '45 EGP' }
      ]
    },
    hotChocolate: {
      icon: <Coffee size={24} />,
      title: 'Hot Chocolate هوت شوكليت',
      items: [
        { name: 'Hot Chocolate هوت شوكليت', price: '80 EGP' },
        { name: 'Salted Caramel سولتد كراميل', price: '85 EGP' },
        { name: 'Hazelnut بندق', price: '85 EGP' },
        { name: 'Marshmallow مارشميلو', price: '90 EGP' },
        { name: 'Maltesers مالتيزر', price: '105 EGP' },
        { name: 'Pistachio بيستاشيو', price: '125 EGP' },
        { name: 'Kinder كيندر 🍫', price: '110 EGP', featured: true },
        { name: 'Lotus لوتس', price: '95 EGP' },
        { name: 'Nutella نوتيلا', price: '95 EGP' }
      ]
    },
    coffee: {
      icon: <Coffee size={24} />,
      title: 'Coffee قهوة',
      items: [
        { name: 'Turkish Coffee Single سينجل', price: '40 EGP' },
        { name: 'Turkish Coffee Double دبل', price: '55 EGP' },
        { name: 'Hazelnut Coffee قهوة بندق', price: '60 EGP' },
        { name: 'French Coffee فرنساوي', price: '55 EGP' },
        { name: 'Nutella Coffee نوتيلا', price: '65 EGP' },
        { name: 'Espresso Single سينجل', price: '40 EGP' },
        { name: 'Espresso Decaf ديكاف', price: '50 EGP' },
        { name: 'Espresso Double دبل', price: '55 EGP' },
        { name: 'Bonbon Espresso', price: '55 EGP' },
        { name: 'Cortado Coffee كورتو', price: '75 EGP' },
        { name: 'Cortado Toffee توفي', price: '80 EGP' },
        { name: 'Flat White فلات وايت', price: '95 EGP' },
        { name: 'Americano اميركانو', price: '65 EGP' },
        { name: 'Mocha Nutella موكا نوتيلا', price: '95 EGP' },
        { name: 'Hot Spanish Latte', price: '95 EGP' },
        { name: 'Cappuccino كابتشينو', price: '79 EGP' },
        { name: 'Caramel Macchiato', price: '70 EGP' },
        { name: 'Espresso Con Panna', price: '55 EGP' },
        { name: 'Espresso Affogato', price: '60 EGP' },
        { name: 'Latte لاتية', price: '70 EGP' },
        { name: 'Pistachio Latte بيستاشيو', price: '99 EGP' },
        { name: 'Dark Mocha موكا دارك', price: '95 EGP' },
        { name: 'White Mocha موكا وايت', price: '95 EGP' },
        { name: 'Tiramisu Latte ترامسيو', price: '145 EGP' }
      ]
    },
    icedCoffee: {
      icon: <IceCream size={24} />,
      title: 'Iced Coffee ايس كوفي',
      items: [
        { name: 'Iced Latte أيس لاتية', price: '85 EGP' },
        { name: 'Iced Tiramisu Latte', price: '165 EGP' },
        { name: 'Iced Mocha أيس موكا', price: '115 EGP' },
        { name: 'Blue Iced Coffee', price: '95 EGP' },
        { name: 'Iced Red Velvet', price: '95 EGP' },
        { name: 'Iced Salted Caramel', price: '110 EGP' },
        { name: 'Iced Spanish Latte', price: '105 EGP' },
        { name: 'Iced Spanish Pistachio', price: '165 EGP' },
        { name: 'Iced Toffee Nut Latte', price: '125 EGP' },
        { name: 'Iced Cinnabon Latte', price: '135 EGP' },
        { name: 'Iced Pistachio Latte', price: '145 EGP' }
      ]
    },
    freshJuices: {
      icon: <IceCream size={24} />,
      title: 'Fresh Juices عصائر فريش',
      items: [
        { name: 'Mango Juice عصير مانجو', price: '80 EGP' },
        { name: 'Strawberry Juice فراولة', price: '75 EGP' },
        { name: 'Guava Juice جوافة', price: '70 EGP' },
        { name: 'Banana Juice موز', price: '70 EGP' },
        { name: 'Lemon Juice ليمون', price: '60 EGP' },
        { name: 'Lemon Mint ليمون نعناع', price: '65 EGP' },
        { name: 'Lemon Pomegranate', price: '70 EGP' },
        { name: 'Watermelon Juice بطيخ', price: '75 EGP' },
        { name: 'Kiwi Juice كيوي', price: '105 EGP' },
        { name: 'Peach Juice خوخ', price: '115 EGP' },
        { name: 'Orange Juice برتقال', price: '75 EGP' },
        { name: 'Avocado Honey Nuts', price: '125 EGP' },
        { name: 'Avocado Mango', price: '115 EGP' },
        { name: 'Avocado Banana', price: '110 EGP' },
        { name: 'Pomegranate Juice رمان', price: '105 EGP' }
      ]
    },
    milkshakes: {
      icon: <IceCream size={24} />,
      title: 'Milkshakes ميلك شيك',
      items: [
        { name: 'Vanilla Milkshake فانيليا', price: '95 EGP' },
        { name: 'Chocolate Milkshake شوكليت', price: '95 EGP' },
        { name: 'Caramel Milkshake كراميل', price: '110 EGP' },
        { name: 'Pistachio Milkshake فستق', price: '175 EGP' },
        { name: 'Kinder Milkshake كيندر', price: '165 EGP', featured: true },
        { name: 'Lotus Milkshake لوتس', price: '135 EGP' },
        { name: 'Oreo Milkshake اوريو', price: '125 EGP' },
        { name: 'Nutella Milkshake نوتيلا', price: '115 EGP' },
        { name: 'Oreo Nutella ميكس', price: '135 EGP' },
        { name: 'Chocolate Lover عاشق الشيكولاتة', price: '140 EGP' },
        { name: 'Blueberry Milkshake', price: '110 EGP' },
        { name: 'Brownie Milkshake براونيز', price: '145 EGP' },
        { name: 'Berry Yogurt Milkshake', price: '150 EGP' }
      ]
    },
    desserts: {
      icon: <Cookie size={24} />,
      title: 'Desserts ديزيرت',
      items: [
        { name: 'Cheesecake تشيز كيك', price: '125 EGP', desc: 'فراولة - توت - شوكليت - كراميل' },
        { name: 'Nutella Cheesecake', price: '130 EGP' },
        { name: 'Pistachio Cheesecake', price: '195 EGP' },
        { name: 'Kinder Cheesecake', price: '165 EGP', featured: true },
        { name: 'Molten Cake مولتن كيك', price: '130 EGP' },
        { name: 'Brownie Cake براونيز', price: '120 EGP' },
        { name: 'Chocolate Fudge', price: '120 EGP' },
        { name: 'Tiramisu Cake ترامسيو', price: '125 EGP' },
        { name: 'Mini Red Velvet', price: '125 EGP' },
        { name: 'Mini Pistachio Cake', price: '165 EGP' },
        { name: 'Cinnabon Cake سينابون', price: '115 EGP' },
        { name: 'San Sebastian', price: '135 EGP' },
        { name: 'Cocoa Bean حبة كاكاو', price: '130 EGP' }
      ]
    },
    waffles: {
      icon: <Cookie size={24} />,
      title: 'Waffles الوافل',
      items: [
        { name: 'Classic Waffle كلاسيك', price: '110 EGP' },
        { name: 'Nutella Waffle نوتيلا', price: '125 EGP' },
        { name: 'Nutella Oreo Waffle', price: '145 EGP' },
        { name: 'Lotus Waffle لوتس', price: '140 EGP' },
        { name: 'Mix Waffle ميكس', price: '165 EGP' },
        { name: 'Pistachio Waffle فستق', price: '185 EGP' },
        { name: 'Kinder Waffle كيندر', price: '160 EGP', featured: true },
        { name: 'Dip & Box Waffle', price: '180 EGP' }
      ]
    }
  }

  const categories = Object.keys(menuData)
  
  const menuHighlights = {
    breakfast: ['6Point Breakfast', 'Healthy Breakfast', 'Omelet Roll Beef Bacon'],
    appetizers: ['6Point Combo', 'Chicken Strips', 'Spring Roll'],
    pizza: ['6Point Burger', 'Texas Bacon Burger', 'Margherita'],
    coffee: ['Spanish Latte', 'Pistachio Latte', 'Flat White']
  }

  return (
    <section className="menu" id="menu">
      <div className="container">
        <h2>{t(translations.menu.title)}</h2>
        <p className="menu-intro">{t(translations.menu.subtitle)}</p>
        
        {/* Download PDF Button */}
        <div className="pdf-download-section">
          <a 
            href={menuPDF} 
            download="Sixpoint-Menu.pdf"
            className="download-menu-btn"
          >
            <Download size={20} />
            {t(translations.menu.downloadMenu)}
          </a>
        </div>

        {/* Menu Layout - Categories and Items Together */}
        <div className="menu-layout">
          {/* Categories Sidebar */}
          <div className="menu-categories-sidebar">
            <h3 className="sidebar-title">{t(translations.menu.categories)}</h3>
            {categories.map((cat) => (
              <button
                key={cat}
                className={`category-item ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                <div className="category-item-icon">{menuData[cat].icon}</div>
                <span className="category-item-text">{menuData[cat].title}</span>
              </button>
            ))}
          </div>

          {/* Menu Items Display */}
          <div className="menu-content">
            <div className="menu-header-section">
              <div className="menu-section-icon">{menuData[activeCategory].icon}</div>
              <h3 className="menu-section-title">{menuData[activeCategory].title}</h3>
            </div>
            
            <div className="menu-items-grid">
              {menuData[activeCategory].items.map((item, index) => (
                <div 
                  key={index} 
                  className={`menu-card ${item.featured ? 'featured' : ''}`}
                >
                  {item.featured && <span className="featured-badge">⭐ {t(translations.menu.featured)}</span>}
                  <div className="menu-card-header">
                    <h4 className="item-name">{item.name}</h4>
                    <span className="item-price">{item.price}</span>
                  </div>
                  {item.desc && <p className="item-desc">{item.desc}</p>}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="menu-footer-note">
          <p>{t(translations.menu.serviceCharge)}</p>
          <p>{t(translations.menu.sidesNote)}</p>
        </div>
      </div>
    </section>
  )
}

export default Menu

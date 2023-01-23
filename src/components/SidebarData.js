
import React from 'react'
import * as Icon from 'react-feather'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
// admin
export const SidebarData = [
    {
        title: 'Master Data',
        path: '/overview',
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Siswa',
                path: '/master/siswa',
                icon: <IoIcons.IoIosPaper />
            },
            {
                title: 'Kelas',
                path: '/app/kelas',
                icon: <IoIcons.IoLogoReddit />
            },
            {
                title: 'Mata Pelajaran',
                path: '/master/mapel',
                icon: <IoIcons.IoIosPaper />
            },
            {
                title: 'Tenaga Pendidik',
                path: '/app/karyawan',
                icon: <IoIcons.IoIosPaper />
            },
            {
                title: 'Tenaga Kependidikan',
                path: '/app/karyawan',
                icon: <IoIcons.IoIosPaper />
            }
            // {
            //     title: 'Kurikulum',
            //     path: '/app/kurikulum',
            //     icon: <IoIcons.IoIosPaper />
            // }
        ]
    },
    {
        title: 'Penilaian',
        path: '/overview',
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Raport',
                path: '/app/raport',
                icon: <IoIcons.IoIosPaper />
            },
            {
                title: 'Persentanse',
                path: '/app/persentase/penilaian',
                icon: <IoIcons.IoIosPaper />
            }
        ]
    },
    {
        title: 'Laporan',
        path: '/reports',
        icon: <IoIcons.IoIosPaper />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
            {
                title: 'Penilaian',
                path: '/master/laporan',
                icon: <IoIcons.IoIosPaper />,
                cName: 'sub-nav'
            }
        ]
    },
    {
        title: 'Aplikasi',
        path: '/messages',
        icon: <FaIcons.FaEnvelopeOpenText />,

        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
            {
                title: 'Akses Login',
                path: '/app/user',
                icon: <IoIcons.IoIosPaper />
            },
            {
                title: 'Indentitas Aplikasi',
                path: '/app/identitas',
                icon: <IoIcons.IoIosPaper />
            }
        ]
    },

];
// murid
export const Murid = [

    {
        title: 'Penilaian Siswa',
        path: '/overview',
        icon: <Icon.List />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Persentanse',
                path: '/app/persentase/penilaian',
                icon: <IoIcons.IoIosPaper />
            }
        ]
    },
    {
        title: 'Laporan',
        path: '/reports',
        icon: <IoIcons.IoIosPaper />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
            {
                title: 'Penilaian',
                path: '/master/laporan',
                icon: <IoIcons.IoIosPaper />,
                cName: 'sub-nav'
            }
        ]
    },


];
// guru
export const Guru = [
    {
        title: 'Master Data',
        path: '/overview',
        icon: <Icon.List />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Siswa',
                path: '/master/siswa',
                icon: <IoIcons.IoIosPaper />
            },
            {
                title: 'Mata Pelajaran',
                path: '/master/mapel',
                icon: <IoIcons.IoIosPaper />
            },
            // {
            //     title: 'Tenaga Pendidik',
            //     path: '/app/karyawan',
            //     icon: <IoIcons.IoIosPaper />
            // },
            // {
            //     title: 'Tenaga Kependidikan',
            //     path: '/app/karyawan',
            //     icon: <IoIcons.IoIosPaper />
            // }
            // {
            //     title: 'Kurikulum',
            //     path: '/app/kurikulum',
            //     icon: <IoIcons.IoIosPaper />
            // }
        ]
    },
    {
        title: 'Penilaian',
        path: '/overview',
        icon: <Icon.UserX />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Raport',
                path: '/app/raport',
                icon: <IoIcons.IoIosPaper />
            },
            {
                title: 'Persentanse',
                path: '/app/persentase/penilaian',
                icon: <IoIcons.IoIosPaper />
            }
        ]
    },
    {
        title: 'Laporan',
        path: '/reports',
        icon: <Icon.DownloadCloud />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
            {
                title: 'Penilaian',
                path: '/master/laporan',
                icon: <IoIcons.IoIosPaper />,
                cName: 'sub-nav'
            }
        ]
    },
    // {
    //     title: 'Aplikasi',
    //     path: '/messages',
    //     icon: <FaIcons.FaEnvelopeOpenText />,

    //     iconClosed: <RiIcons.RiArrowDownSFill />,
    //     iconOpened: <RiIcons.RiArrowUpSFill />,

    //     subNav: [
    //         {
    //             title: 'Akses Login',
    //             path: '/app/user',
    //             icon: <IoIcons.IoIosPaper />
    //         },
    //         {
    //             title: 'Indentitas Aplikasi',
    //             path: '/app/identitas',
    //             icon: <IoIcons.IoIosPaper />
    //         }
    //     ]
    // },

];
import Ember from 'ember';

export default Ember.Object.create({
    data: [
        {
            id: 1,
            insightCategory: 1, // vision
            title: 'Blurry Vision?',
            content: 'It’s been over a year since your last vision exam. Book your exam now! (It’s free to you!).',
            followUpContent: 'Call "For Eyes Optometry Now": 303-555-EYES',
            buttons: [
                {
                    label: 'Book',
                    action: 'insight-show-modal'
                },
                {
                    label: 'Dismiss',
                    action: 'insight-dismiss',
                    extraClass: 'alert',
                    icon: 'fa-trash'
                },
            ]
        },
        {
            id: 2,
            insightCategory: 1, // vision
            title: 'Free Money!',
            content: 'You have $400 left in unused vision benefit. Order new glasses or contacts before January 1st.',
            followUpContent: '1-800-Contacts, Warby Parker, Lenscrafter and Mile High Optometry all accept your vision insurance and will maximize your benefit.',
            buttons: [
                {
                    label: 'Tell me more',
                    action: 'insight-show-modal'
                },
                {
                    label: 'Dismiss',
                    action: 'insight-dismiss',
                    extraClass: 'alert',
                    icon: 'fa-trash'
                },
            ]

        },
        {
            id: 3,
            insightCategory: 1, // vision
            title: 'Blurry Vision?',
            content: 'Considering Lasik eye surgery? Your vision plan grants you a 20% discount.',
            followUpContent: 'Contact Denver Eye Physicians to request a quote and maximize your benefit.',
            buttons: [
                {
                    label: 'Tell me more',
                    action: 'insight-show-modal'
                },
                {
                    label: 'Dismiss',
                    action: 'insight-dismiss',
                    extraClass: 'alert',
                    icon: 'fa-trash'
                },
            ]

        },
        {
            id: 4,
            insightCategory: 2,
            title: 'WOOT!',
            content: 'You met your dental insurance deductible of $100. Going forward your dental insurance will cover 90% of the total cost.',
            buttons: [
                {
                    label: 'Awesome! Thanks!',
                    action: 'insight-dismiss'
                }
            ],


        },
        {
            id: 5,
            insightCategory: 2,
            title: 'Keep those pearlies white!',
            content: 'It\'s been 4 months since your last teeth cleaning. If you go to a preferred dentist, you will only pay 10% of the total cost.',
            followUpContent: 'Log onto Trident Dental Insurance website to see a list of preferred providers to maximize your benefit.',
            buttons: [
                {
                    label: 'Tell me more',
                    action: 'insight-show-modal'
                },
                {
                    label: 'Dismiss',
                    action: 'insight-dismiss',
                    extraClass: 'alert',
                    icon: 'fa-trash'
                }
            ]

        },
        {
            id: 6,
            insightCategory: 2,
            title: 'Whoa Nelly!',
            content: 'You spent $1,472.12 so far on dental work this year. Your total allowance is $1500. We recommend holding off on any non-urgent procedures until after January 1st. ',
            followUpContent: 'Log onto Trident Dental Insurance website to see a list of preferred providers to maximize your benefit.',
            buttons: [
                {
                    label: 'Phew! Thanks!',
                    action: 'insight-dismiss'
                }
            ]

        },
        {
            id: 7,
            insightCategory: 3,
            title: 'Save those clams!',
            content: 'You spent an average $1,856.33 the last couple years on reoccurring expenses. If you put $1,800 into your FSA that would be tax free!',
            followUpContent: 'This can be done via automatic payroll deduction allowing you to distribute the cost through out the year.',
            buttons: [
                {
                    label: 'Tell me more',
                    action: 'insight-show-modal'
                },
                {
                    label: 'Dismiss',
                    action: 'insight-dismiss',
                    extraClass: 'alert',
                    icon: 'fa-trash'
                }
            ]

        },
        {
            id: 8,
            insightCategory: 3,
            title: 'Free Money!',
            content: 'You currently have $740.12 in your FSA. Use your flex card to spend $240.12 before December 31st so that you do not lose this money.',
            followUpContent: 'You can use those benefits for things you are already buying like birth control, eye exams, or acupuncture.',
            buttons: [
                {
                    label: 'Tell me more',
                    action: 'insight-show-modal'
                },
                {
                    label: 'Dismiss',
                    action: 'insight-dismiss',
                    extraClass: 'alert',
                    icon: 'fa-trash'
                }
            ]

        },
        {
            id: 9,
            insightCategory: 3,
            title: 'Did you know...',
            content: 'You are allowed to carry over $500 on your FSA each year.',
            buttons: [
                {
                    label: 'Awesome! Thanks!',
                    action: 'insight-dismiss'
                }
            ]

        },
        {
            id: 10,
            insightCategory: 3,
            title: 'Rescue those Washingtons!',
            content: 'Your end of year FSA balance was $856.12. If you file for a grace period with the IRS you can get 2 1/2 more months to spend $356.12.',
            followUpContent: 'Here\'s the link to the IRS application',
            buttons: [
                {
                    label: 'How?',
                    action: 'insight-show-modal'
                },
                {
                    label: 'Dismiss',
                    action: 'insight-dismiss',
                    extraClass: 'alert',
                    icon: 'fa-trash'
                }
            ]

        },
        {
            id: 11,
            insightCategory: 4,
            title: 'Did you know...',
            content: 'Your current insurance plan has a $6,000 deductible. We recommend you set aside the maximum amount of $3,350 into your HSA before the end of the year.',
            buttons: [
                {
                    label: 'Awesome! Thanks!',
                    action: 'insight-dismiss'
                }
            ]

        },
        {
            id: 12,
            insightCategory: 4,
            title: 'Free Money!',
            content: 'Your employer has contributed $2,500 to your HSA as part of your insurance plan.',
            followUpContent: 'You can use those benefits for things you are already buying like birth control, eye exams, or acupuncture.',
            buttons: [
                {
                    label: 'Tell me more',
                    action: 'insight-show-modal'
                },
                {
                    label: 'Dismiss',
                    action: 'insight-dismiss',
                    extraClass: 'alert',
                    icon: 'fa-trash'
                }
            ]

        },
        {
            id: 13,
            insightCategory: 4,
            title: 'Did you know...',
            content: 'You made a $1,500 contribution to your HSA from your personal savings account.',
            followUpContent: 'Use IRS form 1040 to decrease your gross taxable income.',
            buttons: [
                {
                    label: 'Tell me more',
                    action: 'insight-show-modal'
                },
                {
                    label: 'Dismiss',
                    action: 'insight-dismiss',
                    extraClass: 'alert',
                    icon: 'fa-trash'
                }
            ]

        },
        {
            id: 14,
            insightCategory: 4,
            title: 'Rescue those Washingtons!',
            content: 'Your new plan is no longer eligible for an HSA, but you still have access to those funds (current balance $1312).',
            followUpContent: 'We recommend using that for all future medical expenses until it is exhausted.',
            buttons: [
                {
                    label: 'Tell me more',
                    action: 'insight-show-modal'
                },
                {
                    label: 'Dismiss',
                    action: 'insight-dismiss',
                    extraClass: 'alert',
                    icon: 'fa-trash'
                }
            ]

        },
        {
            id: 15,
            insightCategory: 4,
            title: 'Remember...',
            content: 'Looks like you paid your last co-pay at Colorado Physicians Group with your credit card. We recommend you use your HSA for future co-pays.',
            followUpContent: 'You may submit this co-pay to your HSA for reimbursement.',
            buttons: [
                {
                    label: 'Tell me more',
                    action: 'insight-show-modal'
                },
                {
                    label: 'Dismiss',
                    action: 'insight-dismiss',
                    extraClass: 'alert',
                    icon: 'fa-trash'
                }
            ]

        },
        {
            id: 16,
            insightCategory: 4,
            title: 'Did you know...',
            content: 'You used your HSA for over the counter purchase of Allegra. This purchase is subject to income taxes and a 20% penalty.',
            followUpContent: 'If you foresee a need for regular purchase of Allegra, we recommend getting a prescription at your next primary care visit.',
            buttons: [
                {
                    label: 'Tell me more',
                    action: 'insight-show-modal'
                },
                {
                    label: 'Dismiss',
                    action: 'insight-dismiss',
                    extraClass: 'alert',
                    icon: 'fa-trash'
                }
            ]
        },
        {
            id: 17,
            insightCategory: 5,
            title: 'Did you know...',
            content: 'You visited an urgent care last month at an expense of $736.12. If you could have gotten your issues resolved remotely, your insurance offers TeleDoc services for free!',
            followUpContent: 'Using Teledoc services, you can ask questions and get answers from a real doctor FREE',
            buttons: [
                {
                    label: 'Tell me more',
                    action: 'insight-show-modal'
                },
                {
                    label: 'Dismiss',
                    action: 'insight-dismiss',
                    extraClass: 'alert',
                    icon: 'fa-trash'
                }
            ]
        },
        {
            id: 18,
            insightCategory: 5,
            title: 'Did you know...',
            content: 'You spent $6,200 in medical expenses last year. You can deduct medical spending over 10% of your annual income.',
            followUpContent: 'Use IRS Form 1040 with Schedule A to claim this deduction.',
            buttons: [
                {
                    label: 'Tell me more',
                    action: 'insight-show-modal'
                },
                {
                    label: 'Dismiss',
                    action: 'insight-dismiss',
                    extraClass: 'alert',
                    icon: 'fa-trash'
                }
            ]
        },
        {
            id: 19,
            insightCategory: 5,
            title: 'WOOT!',
            content: 'You met your primary care deductible of $1500. Going forward your dental insurance will cover 90% of the total cost.',
            buttons: [
                {
                    label: 'Awesome! Thanks!',
                    action: 'insight-dismiss'
                }
            ]
        }
    ]
});
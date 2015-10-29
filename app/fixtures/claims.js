import Ember from 'ember';
import CurrentMonthFixture from '../fixtures/current-month-claims';

var raw = [

    {
        // #3
        dependent: 2,
        expenseType: 1,
        vendor: 8,
        amountBilled: 38,
        memberRate: 29.7,
        copay: 0,
        amountTowardDeductible: 29.7,
        planPaid: 0,
        adjustments: 0,
        hcFund: 0,
        dateCreated: new Date('3/8/2010')
    },

    {
        // #4
        dependent: 2,
        expenseType: 1,
        vendor: 8,
        amountBilled: 38,
        memberRate: 29.7,
        copay: 0,
        amountTowardDeductible: 29.7,
        planPaid: 0,
        adjustments: 0,
        hcFund: 0,
        dateCreated: new Date('4/3/2010')
    },

    {
        // #5
        dependent: 4,
        expenseType: 6,
        vendor: 2,
        amountBilled: 608,
        memberRate: 340.61,
        copay: 0,
        amountTowardDeductible: 0,
        planPaid: 340.61,
        adjustments: 0,
        hcFund: 0,
        dateCreated: new Date('6/25/2010')
    },

    {
        // #6
        dependent: 2,
        expenseType: 2,
        vendor: 8,
        amountBilled: 38,
        memberRate: 29.7,
        copay: 0,
        amountTowardDeductible: 29.7,
        planPaid: 0,
        adjustments: 0,
        hcFund: 0,
        dateCreated: new Date('7/29/2010')
    },

    {
        // #7
        dependent: 4,
        expenseType: 6,
        vendor: 2,
        amountBilled: 479.75,
        memberRate: 302.91,
        copay: 0,
        amountTowardDeductible: 0,
        planPaid: 302.91,
        adjustments: 0,
        hcFund: 0,
        dateCreated: new Date('9/15/2010')
    },

    {
        // #8
        dependent: 2,
        expenseType: 2,
        vendor: 8,
        amountBilled: 38,
        memberRate: 29.7,
        copay: 0,
        amountTowardDeductible: 29.7,
        planPaid: 0,
        adjustments: 0,
        hcFund: 0,
        dateCreated: new Date('9/27/2010')
    },

    {
        // #9
        dependent: 4,
        expenseType: 6,
        vendor: 2,
        amountBilled: 465.5,
        memberRate: 329.35,
        copay: 0,
        amountTowardDeductible: 0,
        planPaid: 329.35,
        adjustments: 0,
        hcFund: 0,
        dateCreated: new Date('9/14/2011')
    },

    {
        // #10
        dependent: 1,
        expenseType: 2,
        vendor: 5,
        amountBilled: 81.7,
        memberRate: 62.75,
        copay: 0,
        amountTowardDeductible: 62.75,
        planPaid: 0,
        adjustments: 0,
        hcFund: 0,
        dateCreated: new Date('9/30/2011')
    },

    {
        // #11
        dependent: 1,
        expenseType: 2,
        vendor: 5,
        amountBilled: 2850,
        memberRate: 2722.65,
        copay: 0,
        amountTowardDeductible: 0,
        planPaid: 2450.39,
        adjustments: 0,
        hcFund: 0,
        dateCreated: new Date('10/1/2011')
    },

    {
        // #12
        dependent: 1,
        expenseType: 2,
        vendor: 9,
        amountBilled: 24.23,
        memberRate: 24.79,
        copay: 0,
        amountTowardDeductible: 0,
        planPaid: 0,
        adjustments: -23.61,
        hcFund: 0,
        dateCreated: new Date('10/1/2011')
    },

    {
        // #13
        dependent: 1,
        expenseType: 7,
        vendor: 6,
        amountBilled: 18538.57,
        memberRate: 6090,
        copay: 0,
        amountTowardDeductible: 0,
        planPaid: 5176.5,
        adjustments: 0,
        hcFund: 0,
        dateCreated: new Date('10/1/2011')
    },

    {
        // #14
        dependent: 1,
        expenseType: 6,
        vendor: 5,
        amountBilled: 2327.5,
        memberRate: 892.5,
        copay: 0,
        amountTowardDeductible: 0,
        planPaid: 714.33,
        adjustments: 0,
        hcFund: 0,
        dateCreated: new Date('10/1/2011')
    },

    {
        // #15
        dependent: 3,
        expenseType: 7,
        vendor: 6,
        amountBilled: 6649.03,
        memberRate: 1711.5,
        copay: 0,
        amountTowardDeductible: 347.46,
        planPaid: 1159.44,
        adjustments: 0,
        hcFund: 0,
        dateCreated: new Date('10/1/2011')
    },

    {
        // #16
        dependent: 1,
        expenseType: 2,
        vendor: 7,
        amountBilled: 607.23,
        memberRate: 90.74,
        copay: 0,
        amountTowardDeductible: 81.95,
        planPaid: 8.79,
        adjustments: 0,
        hcFund: 78.05,
        dateCreated: new Date('2/22/2012')
    },

    {
        // #17
        dependent: 1,
        expenseType: 3,
        vendor: 7,
        amountBilled: 244.15,
        memberRate: 62.94,
        copay: 0,
        amountTowardDeductible: 62.94,
        planPaid: 0,
        adjustments: 0,
        hcFund: 59.94,
        dateCreated: new Date('3/13/2012')
    },

    {
        // #18
        dependent: 1,
        expenseType: 3,
        vendor: 7,
        amountBilled: 244.15,
        memberRate: 62.94,
        copay: 0,
        amountTowardDeductible: 62.94,
        planPaid: 0,
        adjustments: 0,
        hcFund: 59.94,
        dateCreated: new Date('4/22/2012')
    },

    {
        // #19
        dependent: 1,
        expenseType: 2,
        vendor: 4,
        amountBilled: 170.05,
        memberRate: 166.95,
        copay: 0,
        amountTowardDeductible: 0,
        planPaid: 166.95,
        adjustments: 0,
        hcFund: 0,
        dateCreated: new Date('6/30/2012')
    },

    {
        // #20
        dependent: 1,
        expenseType: 3,
        vendor: 10,
        amountBilled: 52.25,
        memberRate: 36.18,
        copay: 0,
        amountTowardDeductible: 0,
        planPaid: 30.75,
        adjustments: 0,
        hcFund: 0,
        dateCreated: new Date('8/1/2012')
    },

    {
        // #21
        dependent: 1,
        expenseType: 3,
        vendor: 7,
        amountBilled: 22.72,
        memberRate: 5.16,
        copay: 0,
        amountTowardDeductible: 0,
        planPaid: 5.16,
        adjustments: 0,
        hcFund: 0,
        dateCreated: new Date('8/5/2012')
    },

    {
        // #22
        dependent: 3,
        expenseType: 2,
        vendor: 11,
        amountBilled: 237.5,
        memberRate: 182.67,
        copay: 0,
        amountTowardDeductible: 182.67,
        planPaid: 0,
        adjustments: 0,
        hcFund: 0,
        dateCreated: new Date('8/19/2012')
    },

    {
        // #23
        dependent: 1,
        expenseType: 3,
        vendor: 12,
        amountBilled: 23.75,
        memberRate: 20.59,
        copay: 0,
        amountTowardDeductible: 0,
        planPaid: 4.84,
        adjustments: -15,
        hcFund: 0,
        dateCreated: new Date('8/24/2012')
    },

    {
        // #24
        dependent: 1,
        expenseType: 2,
        vendor: 13,
        amountBilled: 394.25,
        memberRate: 347.51,
        copay: 0,
        amountTowardDeductible: 104.92,
        planPaid: 0,
        adjustments: -231.04,
        hcFund: 99.92,
        dateCreated: new Date('8/29/2012')
    },

    {
        // #25
        dependent: 3,
        expenseType: 6,
        vendor: 2,
        amountBilled: 118.75,
        memberRate: 94.53,
        copay: 0,
        amountTowardDeductible: 0,
        planPaid: 94.53,
        adjustments: 0,
        hcFund: 0,
        dateCreated: new Date('9/11/2012')
    },

    {
        // #26
        dependent: 3,
        expenseType: 7,
        vendor: 14,
        amountBilled: 351.5,
        memberRate: 152.38,
        copay: 0,
        amountTowardDeductible: 152.38,
        planPaid: 52.5,
        adjustments: 0,
        hcFund: 0,
        dateCreated: new Date('10/18/2012')
    },

    {
        // #27
        dependent: 2,
        expenseType: 2,
        vendor: 4,
        amountBilled: 170.05,
        memberRate: 166.95,
        copay: 0,
        amountTowardDeductible: 0,
        planPaid: 166.95,
        adjustments: 0,
        hcFund: 0,
        dateCreated: new Date('10/26/2012')
    },

    {
        // #28
        dependent: 1,
        expenseType: 3,
        vendor: 5,
        amountBilled: 7.6,
        memberRate: 7.48,
        copay: 0,
        amountTowardDeductible: 0,
        planPaid: 0,
        adjustments: -7.12,
        hcFund: 0,
        dateCreated: new Date('11/2/2012')
    },

    {
        // #29
        dependent: 1,
        expenseType: 3,
        vendor: 9,
        amountBilled: 8.55,
        memberRate: 8.61,
        copay: 0,
        amountTowardDeductible: 0,
        planPaid: 0,
        adjustments: -8.2,
        hcFund: 0,
        dateCreated: new Date('11/13/2012')
    },

    {
        // #30
        dependent: 1,
        expenseType: 7,
        vendor: 10,
        amountBilled: 95,
        memberRate: 63.34,
        copay: 0,
        amountTowardDeductible: 0,
        planPaid: 63.34,
        adjustments: 0,
        hcFund: 0,
        dateCreated: new Date('11/23/2012')
    },

    {
        // #31
        dependent: 1,
        expenseType: 2,
        vendor: 9,
        amountBilled: 213.75,
        memberRate: 96.48,
        copay: 0,
        amountTowardDeductible: 0,
        planPaid: 82.02,
        adjustments: 0,
        hcFund: 0,
        dateCreated: new Date('12/2/2012')
    },

    {
        // #32
        dependent: 3,
        expenseType: 6,
        vendor: 2,
        amountBilled: 118.75,
        memberRate: 94.53,
        copay: 0,
        amountTowardDeductible: 0,
        planPaid: 94.53,
        adjustments: 0,
        hcFund: 0,
        dateCreated: new Date('12/26/2012')
    },

    {
        // #33
        dependent: 1,
        expenseType: 2,
        vendor: 15,
        amountBilled: 100.7,
        memberRate: 80.85,
        copay: 0,
        amountTowardDeductible: 0,
        planPaid: 53.55,
        adjustments: -17,
        hcFund: 0,
        dateCreated: new Date('1/24/2013')
    },

    {
        // #34
        dependent: 3,
        expenseType: 6,
        vendor: 2,
        amountBilled: 840.75,
        memberRate: 548.69,
        copay: 0,
        amountTowardDeductible: 0,
        planPaid: 548.69,
        adjustments: 0,
        hcFund: 0,
        dateCreated: new Date('2/2/2013')
    },

    {
        // #35
        dependent: 4,
        expenseType: 2,
        vendor: 2,
        amountBilled: 194.75,
        memberRate: 114.73,
        copay: 0,
        amountTowardDeductible: 0,
        planPaid: 114.73,
        adjustments: 0,
        hcFund: 0,
        dateCreated: new Date('3/7/2013')
    },

    {
        // #36
        dependent: 1,
        expenseType: 2,
        vendor: 10,
        amountBilled: 71.25,
        memberRate: 47.81,
        copay: 0,
        amountTowardDeductible: 0,
        planPaid: 47.81,
        adjustments: 0,
        hcFund: 0,
        dateCreated: new Date('3/29/2013')
    },

    {
        // #37
        dependent: 4,
        expenseType: 2,
        vendor: 14,
        amountBilled: 95,
        memberRate: 78.97,
        copay: 0,
        amountTowardDeductible: 78.97,
        planPaid: 0,
        adjustments: 0,
        hcFund: 75.21,
        dateCreated: new Date('4/15/2013')
    },

    {
        // #38
        dependent: 3,
        expenseType: 6,
        vendor: 2,
        amountBilled: 788.5,
        memberRate: 504.25,
        copay: 0,
        amountTowardDeductible: 0,
        planPaid: 504.25,
        adjustments: 0,
        hcFund: 0,
        dateCreated: new Date('5/4/2013')
    },

    {
        // #39
        dependent: 3,
        expenseType: 6,
        vendor: 14,
        amountBilled: 253.65,
        memberRate: 151.47,
        copay: 0,
        amountTowardDeductible: 0,
        planPaid: 151.47,
        adjustments: 0,
        hcFund: 0,
        dateCreated: new Date('5/27/2013')
    },

    {
        // #40
        dependent: 3,
        expenseType: 6,
        vendor: 2,
        amountBilled: 827.45,
        memberRate: 533.77,
        copay: 0,
        amountTowardDeductible: 0,
        planPaid: 533.77,
        adjustments: 0,
        hcFund: 0,
        dateCreated: new Date('6/17/2013')
    },

    {
        // #41
        dependent: 3,
        expenseType: 2,
        vendor: 16,
        amountBilled: 95,
        memberRate: 79.34,
        copay: 0,
        amountTowardDeductible: 0,
        planPaid: 79.34,
        adjustments: 0,
        hcFund: 0,
        dateCreated: new Date('7/9/2013')
    },

    {
        // #42
        dependent: 3,
        expenseType: 6,
        vendor: 16,
        amountBilled: 589,
        memberRate: 384.18,
        copay: 0,
        amountTowardDeductible: 0,
        planPaid: 384.18,
        adjustments: 0,
        hcFund: 0,
        dateCreated: new Date('9/5/2013')
    },

    //========
    // 2014 data
    {
        // #43
        dependent: 1,
        expenseType: 2,
        vendor: 16,
        amountBilled: 204.25,
        memberRate: 141.55,
        copay: 0,
        amountTowardDeductible: 0,
        planPaid: 113.24,
        adjustments: 0,
        hcFund: 0,
        dateCreated: new Date('2/1/2014')
    },
    {
        // #44
        dependent: 1,
        expenseType: 3,
        vendor: 7,
        amountBilled: 101.62,
        memberRate: 13.05,
        copay: 0,
        amountTowardDeductible: 0,
        planPaid: 10.44,
        adjustments: 0,
        hcFund: 0,
        dateCreated: new Date('2/6/2014')
    },
    {
        // #45
        dependent: 1,
        expenseType: 3,
        vendor: 7,
        amountBilled: 177.95,
        memberRate: 27.85,
        copay: 0,
        amountTowardDeductible: 0,
        planPaid: 22.28,
        adjustments: 0,
        hcFund: 0,
        dateCreated: new Date('2/7/2014')
    },
    {
        // #46
        dependent: 1,
        expenseType: 3,
        vendor: 7,
        amountBilled: 48.45,
        memberRate: 7.71,
        copay: 0,
        amountTowardDeductible: 0,
        planPaid: 6.16,
        adjustments: 0,
        hcFund: 0,
        dateCreated: new Date('2/10/2014')
    },
    {
        // #47
        dependent: 2,
        expenseType: 2,
        vendor: 4,
        amountBilled: 177.65,
        memberRate: 173.25,
        copay: 0,
        amountTowardDeductible: 0,
        planPaid: 173.25,
        adjustments: 0,
        hcFund: 0,
        dateCreated: new Date('2/21/2014')
    },
    {
        // #48
        dependent: 1,
        expenseType: 6,
        vendor: 18,
        amountBilled: 7158.25,
        memberRate: 3381,
        copay: 0,
        amountTowardDeductible: 929.48,
        planPaid: 1961.21,
        adjustments: 0,
        hcFund: 329.49,
        dateCreated: new Date('2/23/2014')
    },
    {
        // #49
        dependent: 1,
        expenseType: 2,
        vendor: 4,
        amountBilled: 177.65,
        memberRate: 173.25,
        copay: 0,
        amountTowardDeductible: 0,
        planPaid: 173.25,
        adjustments: 0,
        hcFund: 0,
        dateCreated: new Date('3/5/2014')
    },
    {
        // #50
        dependent: 3,
        expenseType: 6,
        vendor: 2,
        amountBilled: 570.95,
        memberRate: 379.91,
        copay: 0,
        amountTowardDeductible: 0,
        planPaid: 379.91,
        adjustments: 0,
        hcFund: 0,
        dateCreated: new Date('3/30/2014')
    },
    {
        // #51
        dependent: 1,
        expenseType: 2,
        vendor: 2,
        amountBilled: 388.55,
        memberRate: 271.26,
        copay: 0,
        amountTowardDeductible: 0,
        planPaid: 217,
        adjustments: 0,
        hcFund: 0,
        dateCreated: new Date('4/17/2014')
    },
    {
        // #52
        dependent: 1,
        expenseType: 2,
        vendor: 19,
        amountBilled: 171,
        memberRate: 120.52,
        copay: 0,
        amountTowardDeductible: 0,
        planPaid: 120.52,
        adjustments: 0,
        hcFund: 0,
        dateCreated: new Date('4/26/2014')
    },
    {
        // #53
        dependent: 1,
        expenseType: 2,
        vendor: 20,
        amountBilled: 198.55,
        memberRate: 140.87,
        copay: 0,
        amountTowardDeductible: 0,
        planPaid: 112.7,
        adjustments: 0,
        hcFund: 0,
        dateCreated: new Date('5/5/2014')
    },
    {
        // #54
        dependent: 2,
        expenseType: 2,
        vendor: 3,
        amountBilled: 154.85,
        memberRate: 66.08,
        copay: 0,
        amountTowardDeductible: 66.08,
        planPaid: 0,
        adjustments: 0,
        hcFund: 0,
        dateCreated: new Date('5/9/2014')
    },
    {
        // #55
        dependent: 1,
        expenseType: 2,
        vendor: 21,
        amountBilled: 239.4,
        memberRate: 154.02,
        copay: 0,
        amountTowardDeductible: 0,
        planPaid: 123.21,
        adjustments: 0,
        hcFund: 0,
        dateCreated: new Date('6/14/2014')
    },
    {
        // #56
        dependent: 2,
        expenseType: 2,
        vendor: 3,
        amountBilled: 104.5,
        memberRate: 37.33,
        copay: 0,
        amountTowardDeductible: 37.33,
        planPaid: 0,
        adjustments: 0,
        hcFund: 0,
        dateCreated: new Date('6/14/2014')
    },
    {
        // #57
        dependent: 1,
        expenseType: 2,
        vendor: 21,
        amountBilled: 133,
        memberRate: 87.28,
        copay: 0,
        amountTowardDeductible: 0,
        planPaid: 69.83,
        adjustments: 0,
        hcFund: 0,
        dateCreated: new Date('6/25/2014')
    },
    {
        // #58
        dependent: 1,
        expenseType: 6,
        vendor: 22,
        amountBilled: 698.25,
        memberRate: 314.03,
        copay: 0,
        amountTowardDeductible: 0,
        planPaid: 251.22,
        adjustments: 0,
        hcFund: 0,
        dateCreated: new Date('7/1/2014')
    },
    {
        // #59
        dependent: 1,
        expenseType: 3,
        vendor: 7,
        amountBilled: 103.97,
        memberRate: 14.02,
        copay: 0,
        amountTowardDeductible: 0,
        planPaid: 11.21,
        adjustments: 0,
        hcFund: 0,
        dateCreated: new Date('7/2/2014')
    },
    {
        // #60
        dependent: 1,
        expenseType: 3,
        vendor: 7,
        amountBilled: 103.97,
        memberRate: 14.02,
        copay: 0,
        amountTowardDeductible: 0,
        planPaid: 11.21,
        adjustments: 0,
        hcFund: 0,
        dateCreated: new Date('7/12/2014')
    },
    {
        // #61 -- adjustments for this is =J61-F61 (-9.83)
        dependent: 3,
        expenseType: 2,
        vendor: 2,
        amountBilled: 180.5,
        memberRate: 111.49,
        copay: 0,
        amountTowardDeductible: 0,
        planPaid: 101.66,
        adjustments: 0,
        hcFund: 0,
        dateCreated: new Date('7/23/2014')
    },
    {
        // #62
        dependent: 2,
        expenseType: 2,
        vendor: 23,
        amountBilled: 102.6,
        memberRate: 62.57,
        copay: 0,
        amountTowardDeductible: 62.57,
        planPaid: 0,
        adjustments: 0,
        hcFund: 0,
        dateCreated: new Date('8/1/2014')
    },
    {
        // #63
        dependent: 4,
        expenseType: 2,
        vendor: 2,
        amountBilled: 194.75,
        memberRate: 114.73,
        copay: 0,
        amountTowardDeductible: 0,
        planPaid: 114.73,
        adjustments: 0,
        hcFund: 0,
        dateCreated: new Date('8/13/2014')
    },
    {
        // #64
        dependent: 2,
        expenseType: 2,
        vendor: 24,
        amountBilled: 161.5,
        memberRate: 128.68,
        copay: 0,
        amountTowardDeductible: 128.68,
        planPaid: 0,
        adjustments: 0,
        hcFund: 0,
        dateCreated: new Date('9/14/2014')
    },
    {
        // #65
        dependent: 2,
        expenseType: 1,
        vendor: 1,
        amountBilled: 228.95,
        memberRate: 118.34,
        copay: 0,
        amountTowardDeductible: 118.34,
        planPaid: 0,
        adjustments: 0,
        hcFund: 112.7,
        dateCreated: new Date('9/22/2014')
    },
    {
        // #66
        dependent: 1,
        expenseType: 2,
        vendor: 5,
        amountBilled: 186.2,
        memberRate: 150.82,
        copay: 0,
        amountTowardDeductible: 0,
        planPaid: 139.27,
        adjustments: 0,
        hcFund: 0,
        dateCreated: new Date('10/2/2014')
    },
    {
        // #67
        dependent: 2,
        expenseType: 1,
        vendor: 1,
        amountBilled: 156.75,
        memberRate: 89.11,
        copay: 0,
        amountTowardDeductible: 89.11,
        planPaid: 0,
        adjustments: 0,
        hcFund: 23.98,
        dateCreated: new Date('10/10/2014')
    },
    {
        // #68
        dependent: 2,
        expenseType: 1,
        vendor: 1,
        amountBilled: 52.25,
        memberRate: 29.7,
        copay: 0,
        amountTowardDeductible: 29.7,
        planPaid: 0,
        adjustments: 0,
        hcFund: 23.98,
        dateCreated: new Date('11/25/2014')
    },
    {
        // #69
        dependent: 4,
        expenseType: 2,
        vendor: 4,
        amountBilled: 114,
        memberRate: 107.1,
        copay: 0,
        amountTowardDeductible: 0,
        planPaid: 107.1,
        adjustments: 0,
        hcFund: 0,
        dateCreated: new Date('12/3/2014')
    },
    {
        // #70
        dependent: 1,
        expenseType: 3,
        vendor: 7,
        amountBilled: 277.69,
        memberRate: 48.95,
        copay: 0,
        amountTowardDeductible: 0,
        planPaid: 45.03,
        adjustments: 0,
        hcFund: 0,
        dateCreated: new Date('12/5/2014')
    },
    {
        // #71
        dependent: 2,
        expenseType: 1,
        vendor: 1,
        amountBilled: 52.25,
        memberRate: 29.7,
        copay: 0,
        amountTowardDeductible: 29.7,
        planPaid: 0,
        adjustments: 0,
        hcFund: 28.29,
        dateCreated: new Date('12/11/2014')
    },
    {
        // #72
        dependent: 2,
        expenseType: 1,
        vendor: 1,
        amountBilled: 52.25,
        memberRate: 29.7,
        copay: 0,
        amountTowardDeductible: 29.7,
        planPaid: 0,
        adjustments: 0,
        hcFund: 28.29,
        dateCreated: new Date('12/13/2014')
    },
    {
        // #73
        dependent: 2,
        expenseType: 1,
        vendor: 1,
        amountBilled: 52.25,
        memberRate: 29.7,
        copay: 0,
        amountTowardDeductible: 29.7,
        planPaid: 0,
        adjustments: 0,
        hcFund: 0,
        dateCreated: new Date('12/18/2014')
    },
    {
        // #74
        dependent: 2,
        expenseType: 2,
        vendor: 4,
        amountBilled: 194.75,
        memberRate: 191.1,
        copay: 0,
        amountTowardDeductible: 0,
        planPaid: 191.1,
        adjustments: 0,
        hcFund: 0,
        dateCreated: new Date('12/22/2014')
    },
    {
        // #75
        dependent: 2,
        expenseType: 2,
        vendor: 3,
        amountBilled: 104.5,
        memberRate: 37.33,
        copay: 0,
        amountTowardDeductible: 37.33,
        planPaid: 0,
        adjustments: 0,
        hcFund: 0,
        dateCreated: new Date('12/30/2014')
    },

    //========
    // This year's data
    {
        // #76
        dependent: 2,
        expenseType: 1,
        vendor: 1,
        amountBilled: 52.25, //D
        memberRate: 29.7, // F
        copay: 0, // G
        amountTowardDeductible: 29.7, // H
        planPaid: 0, // J
        adjustments: 0, // K
        hcFund: 0, // M
        dateCreated: new Date('1/15/2015')
    },

    {
        dependent: 3,
        expenseType: 2,
        vendor: 2,
        amountBilled: 180.5,
        memberRate: 110.07,
        copay: 0, // G
        amountTowardDeductible: 0, // H
        planPaid: 110.07, // J
        adjustments: 0, // K
        hcFund: 0, // M
        dateCreated: new Date('2/1/2015')
    },

    {
        // #78
        dependent: 2,
        expenseType: 1,
        vendor: 1,
        amountBilled: 52.25,
        memberRate: 29.7,
        copay: 0,
        amountTowardDeductible: 29.7,
        planPaid: 0,
        adjustments: 0,
        hcFund: 0,
        dateCreated: new Date('3/16/2015')
    },

    {
        // #79
        dependent: 2,
        expenseType: 2,
        vendor: 3,
        amountBilled: 104.5,
        memberRate: 37.33,
        copay: 0,
        amountTowardDeductible: 37.33,
        planPaid: 0,
        adjustments: 0,
        hcFund: 35.55,
        dateCreated: new Date('3/18/2015')
    },

    {
        // #80
        dependent: 1,
        expenseType: 2,
        vendor: 4,
        amountBilled: 194.75,
        memberRate: 191.1,
        copay: 0,
        amountTowardDeductible: 0,
        planPaid: 191.1,
        adjustments: 0,
        hcFund: 0,
        dateCreated: new Date('3/29/2015')
    },

    {
        // #81
        dependent: 2,
        expenseType: 1,
        vendor: 1,
        amountBilled: 52.25,
        memberRate: 29.7,
        copay: 0,
        amountTowardDeductible: 29.7,
        planPaid: 0,
        adjustments: 0,
        hcFund: 7.87,
        dateCreated: new Date('5/21/2015')
    },

    {
        // #82
        dependent: 2,
        expenseType: 1,
        vendor: 1,
        amountBilled: 52.25,
        memberRate: 29.7,
        copay: 0,
        amountTowardDeductible: 29.7,
        planPaid: 0,
        adjustments: 0,
        hcFund: 28.29,
        dateCreated: new Date('5/24/2015')
    }
];

// import current months
CurrentMonthFixture.data.forEach(function(item){
    raw.push(item);
});

var startId = 1;
raw.forEach(function(item){
    item.id = startId;
    startId++;
});

export default Ember.Object.create({
    data: raw
});